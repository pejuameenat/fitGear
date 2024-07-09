import { useGlobalContext } from '../context'
import ProductTemplate from './ProductTemplate'
import { FaCircle, FaRegCircle } from 'react-icons/fa'

const BestSellers = () => {
  const { productData, filled, setFilled, isFilled, setIsFilled } =
    useGlobalContext()
  const uniqueData = [...new Set(productData)]
  console.log(uniqueData)
  return (
    <section id="best-sellers">
      <h2> Best Sellers</h2>
      <div className="product-container">
        {uniqueData.map((item) => (
          <ProductTemplate key={item.id} {...item} />
        ))}
      </div>
      <div className="best-sellers">
        {isFilled ? (
          <button type="button" onClick={() => setIsFilled(false)}>
            <FaRegCircle />
          </button>
        ) : (
          <button type="button" onClick={() => setIsFilled(true)}>
            <FaCircle />
          </button>
        )}
        {filled ? (
          <button type="button" onClick={() => setFilled(false)}>
            <FaRegCircle />
          </button>
        ) : (
          <button type="button">
            <FaCircle onClick={() => setFilled(true)} />
          </button>
        )}
      </div>
    </section>
  )
}

export default BestSellers
