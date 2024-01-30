import './index.css'

const LanguageItem = props => {
  const {itemDetails} = props
  const {imageUrl, imageAltText} = itemDetails

  return (
    <div className="image-container">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </div>
  )
}
export default LanguageItem
