import './index.css'

const SimpleProductItem = props => {
  const addProduct = productData => {
    const {title, brand, imageUrl, rating, id, price} = productData

    return (
      <li className="product-item" key={id}>
        <img
          src={imageUrl}
          alt={`similar product ${title}`}
          className="thumbnail"
        />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
    )
  }

  const {productsList} = props
  return (
    <div className="similar-products-container">
      <h1 className="similar-products-heading">Similar Products</h1>
      <ul className="similar-products-list">
        {productsList.map(eachItem => addProduct(eachItem))}
      </ul>
    </div>
  )
}

export default SimpleProductItem
