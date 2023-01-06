import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartCount = cartList.length
      let totalAmount = 0
      cartList.map(each => {
        totalAmount += each.quantity * each.price
        return null
      })

      return (
        <div className="cart-summary">
          <div className="details">
            <h1>
              Order Total : <span>Rs {totalAmount}</span>
            </h1>
            <p>{cartCount} Items in cart</p>
            <button type="button">Checkout</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
