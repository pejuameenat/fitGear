import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const ProductTemplate = ({ img, productName, price }) => {
  return (
    <article className="product">
      <FaRegHeart className="heart" />
      <img src={img} alt={productName} />
      <h3 className="product-name">{productName}</h3>
      <span className="price">${price}</span>
      <button type="button" className="cart-btn">
        {' '}
        <Link to="/Order" className="link">
          Add to cart
        </Link>
      </button>
    </article>
  )
}

export default ProductTemplate
