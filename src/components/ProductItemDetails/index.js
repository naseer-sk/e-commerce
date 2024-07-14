import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'LOADING',
}

class ProductItemDetails extends Component {
  state = {productsData: {}, count: 1, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        brand: data.brand,
        rating: data.rating,
        availability: data.availability,
        similarProducts: data.similar_products,
        totalReviews: data.total_reviews,
        price: data.price,
        description: data.description,
      }
      const {similarProducts} = updatedData
      const updatedProducts = similarProducts.map(eachItem => ({
        id: eachItem.id,
        availability: eachItem.availability,
        brand: eachItem.brand,
        description: eachItem.description,
        price: eachItem.price,
        rating: eachItem.rating,
        style: eachItem.style,
        title: eachItem.title,
        totalReviews: eachItem.total_reviews,
        imageUrl: eachItem.image_url,
      }))
      updatedData.similarProducts = updatedProducts
      this.setState({
        apiStatus: apiStatusConstants.success,
        productsData: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    if (this.state.count == 1) return
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  renderProductItemDetails = () => {
    const {productsData, count} = this.state
    const isThere = productsData.imageUrl !== undefined

    return (
      <>
        {isThere && (
          <div className="item-container">
            <img
              src={productsData.imageUrl}
              alt="product"
              className="product-item-image"
            />
            <div className="product-item-text-container">
              <h1 className="product-item-heading">{productsData.title}</h1>
              <p className="product-item-price">Rs {productsData.price}/-</p>
              <div className="product-item-reviews-container">
                <div className="product-rating-container">
                  <p className="product-item-rating">{productsData.rating}</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    alt="star"
                    className="star-img"
                  />
                </div>
                <p className="product-item-review">
                  {productsData.totalReviews} Reviews
                </p>
              </div>
              <p className="product-item-description">
                {productsData.description}
              </p>
              <p className="product-item-extra">
                <span className="spanned-one">Availiable: </span>
                {productsData.availability}
              </p>
              <p className="product-item-extra">
                <span className="spanned-one">Brand: </span>
                {productsData.brand}
              </p>
              <hr className="product-card-line" />
              <div className="counter-card">
                <button
                  className="counter-btn"
                  type="button"
                  onClick={this.onDecrement}
                  data-testid="minus"
                >
                  <BsDashSquare />
                </button>
                <p className="product-item-count">{count}</p>
                <button
                  className="counter-btn"
                  type="button"
                  onClick={this.onIncrement}
                  data-testid="plus"
                >
                  <BsPlusSquare />
                </button>
              </div>
              <button type="button" className="product-add-button">
                ADD TO CART
              </button>
            </div>
          </div>
        )}
      </>
    )
  }

  renderSimilarProducts = () => {
    const {productsData} = this.state
    const {similarProducts} = productsData
    const isThere = productsData.imageUrl !== undefined

    return (
      <>{isThere && <SimilarProductItem productsList={similarProducts} />}</>
    )
  }

  renderSuccess = () => {
    return (
      <div className="item-details-container">
        {this.renderProductItemDetails()}
        {this.renderSimilarProducts()}
      </div>
    )
  }

  renderLoadingView = () => {
    return (
      <div data-testid="loader" className="product-item-failure-container">
        <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
      </div>
    )
  }

  renderFailureView = () => {
    return (
      <div className="product-item-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
          alt="failure view"
          className="product-item-failure-img"
        />
        <h1 className="product-item-failure-heading">Product Not Found</h1>
        <Link to="/products">
          <button className="product-item-failure-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    )
  }

  renderByStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderByStatus()}
      </div>
    )
  }
}

export default ProductItemDetails
