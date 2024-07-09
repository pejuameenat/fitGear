import img1 from '../assets/yogaMat-removebg-preview.png'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { CiCirclePlus } from 'react-icons/ci'
import { FaChevronLeft } from 'react-icons/fa6'
const Order = () => {
  return (
    <section id="">
      <div className="order">
        <article className="">
          <h4>
            Cart <span>(1)</span>
          </h4>
          <div className="cartFlex">
            <div className="cartImage">
              <img src={img1} alt="" />
              <div className="cartText">
                <h5>Yoga Mat</h5>
                <button type="button" className="remove">
                  remove item
                </button>
              </div>
            </div>
            <div className="">
              <h5 className="price"># 10,000</h5>
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
            <a href="">Checkout #10,000</a>
          </button>
          <button type="button" className="btn">
            <FaChevronLeft className="chevronRight" />
            <a href="#">Go back and continue shopping</a>
          </button>
        </article>
      </div>
    </section>
  )
}

export default Order
