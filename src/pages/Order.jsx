import { Link } from 'react-router-dom'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { CiCirclePlus } from 'react-icons/ci'
import { FaChevronLeft } from 'react-icons/fa6'
const Order = ({ img, productName, price, amount }) => {
  console.log(img, productName, price, amount)
  return (
    <section id="order">
      <div className="order">
        <article className="">
          <h4>
            Cart <span>({amount})</span>
          </h4>
          <div className="cartFlex">
            <div className="cartImage">
              <img src={img} alt={productName} />
              <div className="cartText">
                <h5>{productName}</h5>
                <button type="button" className="remove">
                  remove item
                </button>
              </div>
            </div>
            <div className="">
              <h5 className="price"># {price}</h5>
              <div className="amount-wrapper">
                <button type="button">
                  <AiOutlineMinusCircle className="amount-btns" />
                </button>
                <span>1</span>
                <button type="button">
                  <CiCirclePlus className="amount-btns" />
                </button>
              </div>
            </div>
          </div>
        </article>
        {/* summary */}
        <article className="cartSummary">
          <h4>Cart Summary</h4>
          <div className="cartFlex">
            <div className="">
              <strong>Subtotal </strong>
              <span>Delivery fee is not added yet</span>
            </div>
            <p>10,000</p>
          </div>
          <button type="button" className="btn checkout-btn">
            <Link to="/Checkout" className="link">
              Checkout #{price}
            </Link>
          </button>
          <button type="button" className="btn">
            <Link to="/" className="link">
              <FaChevronLeft className="chevronRight" />
              Go back and continue shopping
            </Link>
          </button>
        </article>
      </div>
    </section>
  )
}

export default Order
