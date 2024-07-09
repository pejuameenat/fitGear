import { useGlobalContext } from "../context"
import ProductTemplate from "./ProductTemplate"
import BtnContainer from './BtnContainer'

const Products = () => {
    const{productData} = useGlobalContext()
  return (
    <section id="products">
      <h2 className="productsTitle">Our Fitness Solutions</h2>
      <BtnContainer/>
      <div className="product-container">
        {productData.map((item) => (
          <ProductTemplate key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Products