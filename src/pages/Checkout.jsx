import { FaChevronRight } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Checkout = ({ price, amount, img, productName }) => {
  return (
    <section>
      <div className="checkout-container">
        <article className="checkout-details">
          <div className="title-checkout">
            <div className="checkmark-wrapper">
              <FaCircleCheck />
              <h3>Customer Address</h3>
            </div>
            <button type="button">
              CHANGE <FaChevronRight className="chevronRight" />
            </button>
          </div>
          <div className="address-details">
            <h5>Ayomide Adepoju</h5>
            <p>3, Allen, Ikeja, Lagos state | +2347035467289</p>
          </div>
        </article>
        <article className="checkout-details">
          <div className="title-checkout">
            <div className="checkmark-wrapper">
              <FaCircleCheck />
              <h3>Delivery Option</h3>
            </div>
            <button type="button">
              CHANGE
              <FaChevronRight className="chevronRight" />
            </button>
          </div>
          <div className="address-details">
            <h5>Door Step Delivery From #600</h5>
            <p>Delivery between 10th July and 12th July</p>
          </div>
        </article>{' '}
        <article className="checkout-details">
          <div className="title-checkout">
            <div className="checkmark-wrapper">
              <FaCircleCheck />
              <h3>Payment Method </h3>
            </div>
            <button type="button">
              CHANGE <FaChevronRight className="chevronRight" />
            </button>
          </div>
          <div className="address-details">
            <h5> Pay with Cards, Bank Transfer OR USSD</h5>
            <p>You will be redirected to our secure checkout page</p>
          </div>
        </article>
        <article className="checkout-details ">
          <h4>Order Summary</h4>
          <div id="grid">
            <p className="total">
              items total <span>(1)</span>
            </p>
            <h4 className="deliveryPrice">#{price}</h4>
            <div className="product-details">
              <img src={img} alt="" className="deliveryImg" />
              <h5>{productName}</h5>
            </div>
            <p className="deliveryFee">Delivery fees</p>
            <h4 className="delivery">#600</h4>
            <p className="totalText deliveryFee">Total</p>
            <h4 className="priceTotal delivery">{`${price}` * `${amount}`}</h4>
          </div>
          <button type="button" id="confirmOrder">
            <Link to="/OrderSummary" className="link">
              confirm order
            </Link>
          </button>
        </article>
      </div>
    </section>
  )
}

export default Checkout
