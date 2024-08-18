import { useGlobalContext } from '../context'
import ProductTemplate from './ProductTemplate'
import { FaCircle, FaRegCircle } from 'react-icons/fa'
import { products } from '../data'

const BestSellers = () => {
  const {filled, setFilled, isFilled, setIsFilled } =
    useGlobalContext()
  const uniqueData = products.filter(
    (item, i, arr) => i === arr.findIndex((newItem) => newItem.category === item.category)
  )
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
          <button type="button" onClick={() => setIsFilled(false)}>
            <FaRegCircle />
          </button>
           <button type="button">
            <FaCircle onClick={() => setFilled(true)} />
          </button>
       </div>
    </section>
  )
}

export default BestSellers
