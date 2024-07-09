import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const OrderSummary = () => {
  return (
    <section>
      <div className="order">
        <article className="">
          <div className="paymentWrapper payment">
            <h5>Order Summary</h5>
            <p>
              See details <FaChevronRight className="chevronRight" />
            </p>
          </div>
          <div className="payment">
            <p>Total to Pay</p>
            <strong># 10,000</strong>
          </div>
        </article>
        <article className="paymentWrapper">
          <h5>Select Payment Method</h5>
          <p>Pay with USSD or bank transfer</p>
          <button type="button" className="transfer">
            Use a different payment method
          </button>
        </article>
      </div>
      <article className="policy">
        <div className="">
          <button type="button" className="policy-button">
            <Link to="/SuccessModal" className="link">
              PAY NOW
            </Link>
          </button>
          <p>
            By tapping ‘’PAY NOW’’ I accept the Payment Terms and Conditions,
            General Terms and Conditions and Privacy and Cookie Notice.
          </p>
        </div>
        <div className="contacts">
          <p>
            NOTE: we will never ask you for your password, CVV or full card
            details over the phone or is email.
          </p>
          <div className='policyFlex'>
          <p id="contactText">
            Need Help?
            <a href="" id="contactLink">
              {' '}
              Contact Us
            </a>
          </p>
          </div>
          <button type="button" id="back-home">
            <Link to="/" id="link-borderLess">
              BACK TO HOME
            </Link>
          </button>
        </div>
      </article>
    </section>
  )
}

export default OrderSummary
