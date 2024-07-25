import CartContext from '../../context/CartContext'
import './index.css'

const OrderTotal = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalMoney = cartList.reduce(
        (accumulator, curr) => accumulator + curr.price * curr.quantity,
        0,
      )
      const items = cartList.length

      return (
        <div className="order-total-container">
          <h1 className="order-total-heading">
            Order Total:{' '}
            <span className="order-total-money"> Rs {totalMoney}/-</span>
          </h1>
          <p className="order-total-text">{items} items in cart</p>
          <button type="button" className="order-total-checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default OrderTotal
