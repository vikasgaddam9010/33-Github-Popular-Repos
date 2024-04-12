import './index.css'

const LanguageFilterItem = props => {
  const {eachItem} = props
  const {avatar_url, forks_count, id, issues_count, name, stars_count} =
    eachItem
  return (
    <li className="li-css">
      <img src={avatar_url} alt={name} className="avatar-img" />
      <h1 className="name">{name}</h1>
      <div>
        <p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            className="icon"
            alt="stars"
          />{' '}
          {stars_count} sars
        </p>
        <p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            className="icon"
            alt="forks"
          />{' '}
          {forks_count} stars
        </p>
        <p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            className="icon"
            alt="open issues"
          />{' '}
          {issues_count} open issues
        </p>
      </div>
    </li>
  )
}

export default LanguageFilterItem
