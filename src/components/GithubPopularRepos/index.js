import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    languageList: [],
    isLoaderActive: false,
  }
  getActiveTabiId = id => {
    this.setState(
      {activeTabId: id, isLoaderActive: true},
      this.getLanguageListFromApi,
    )
  }
  componentDidMount() {
    this.getLanguageListFromApi()
  }
  apiFailedToGetApi = () => {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
        />
        <h1>Something Went Wrong</h1>
      </div>
    )
  }
  getLanguageListFromApi = async () => {
    const {activeTabId} = this.state

    const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
    const getList = await fetch(url)
    console.log(getList.status)
    const data = await getList.json()
      console.log(data)
    if (getList.ok === true) {
      this.setState({languageList: data.popular_repos, isLoaderActive: false})
    } else{
      console.log("vikas")
      this.apiFailedToGetApi()
    }
  }
  getLanguageListFunction = () => {
    const {languageList} = this.state

    return (
      <ul className="ul-language-container">
        {languageList.map(eachItem => (
          <LanguageFilterItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    )
  }
  render() {
    const {languageList, isLoaderActive} = this.state

    return (
      <div className="bg-container">
        <h1 className="head">Popular</h1>
        <ul className="ul-container">
          {languageFiltersData.map(eachLanguage => (
            <RepositoryItem
              key={eachLanguage.id}
              eachLanguage={eachLanguage}
              isTabActive={eachLanguage.id === this.state.activeTabId}
              getActiveTabiId={this.getActiveTabiId}
            />
          ))}
        </ul>
        {isLoaderActive ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          this.getLanguageListFunction()
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
