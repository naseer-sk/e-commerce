import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  updateQuantity: () => {},
  removeCartList: () => {},
})

export default CartContext
