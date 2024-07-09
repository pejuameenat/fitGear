import { FaRegHeart } from 'react-icons/fa'
const ProductTemplate = ({ img, productName, price }) => {
  return (
    <article className="product">
      <FaRegHeart className='heart'/>
      <img src={img} alt={productName} />
      <h3 className="product-name">{productName}</h3>
      <span className="price">${price}</span>
      <button type="button" className="cart-btn">
        Add to cart
      </button>
    </article>
  )
}

export default ProductTemplate
