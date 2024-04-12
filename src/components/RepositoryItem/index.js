import './index.css'

const RepositoryItem = props => {
  const {eachLanguage, isTabActive, getActiveTabiId} = props
  const cssForTab = isTabActive ? 'tab-border' : 'btn'
  const getTabId = event => {
    getActiveTabiId(eachLanguage.id)
  }
  return (
    <li>
      <button onClick={getTabId} className={cssForTab}>
        {eachLanguage.language}
      </button>
    </li>
  )
}
export default RepositoryItem
