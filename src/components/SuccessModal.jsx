import { BsCartCheckFill } from 'react-icons/bs'
import { IoIosCheckmarkCircle } from 'react-icons/io'
const SuccessModal = () => {
  return (
    <section id="modal">
      <div className="cart-container">
        <div className="modal">
          <BsCartCheckFill className='checkedCart'/>
          <IoIosCheckmarkCircle className='checked'/>
          <h5>Thank You!</h5>
        </div>
        <p>
          Congratulations! Your order has been successfully placed. A
          confirmation email has just been sent to you. We will notify you once
          your order has been shipped.
        </p>
      </div>
    </section>
  )
}

export default SuccessModal
