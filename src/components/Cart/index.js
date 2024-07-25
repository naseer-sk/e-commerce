import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartContext from '../../context/CartContext'
import OrderTotal from '../OrderTotal'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0

      const removeCartList = () => {
        const {emptyCartList} = value
        emptyCartList()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            <div className="cart-content-container">
              {!showEmptyView ? (
                <>
                  <div className="cart-text-container">
                    <h1 className="cart-heading">My Cart</h1>
                    <button
                      data-testid="remove-all"
                      className="remove-all-btn"
                      type="button"
                      onClick={removeCartList}
                    >
                      Remove all
                    </button>
                  </div>
                  <CartListView />
                  <OrderTotal />
                </>
              ) : (
                <EmptyCartView />
              )}
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
