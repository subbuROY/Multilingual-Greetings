import './index.css'

const Greeting = props => {
  const {greetingDetails, updateActiveItem, isActive} = props
  const {buttonText, id} = greetingDetails

  const onClickTabItem = () => {
    updateActiveItem(id)
  }

  const buttonColor = isActive ? 'active' : ''

  return (
    <li className="button-text-container">
      <button
        type="button"
        className={`button ${buttonColor}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Greeting
