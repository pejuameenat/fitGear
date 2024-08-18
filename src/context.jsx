import { createContext, useContext, useState } from 'react'
import { products } from './data'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [productData, setProductData] = useState(products)
  const [filled, setFilled] = useState(true)
  const [isFilled, setIsFilled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [count, setCount] = useState(1)

  const uniqueCategory = [
    'All Categories',
    ...new Set(products.map((item) => item.category)),
  ]

  const filters = (category) => {
    if (category === 'All Categories') {
      setProductData(products)
      return
    }
    const prevProduct = products.filter((item) => item.category === category)
    setProductData(prevProduct)
  }
  const increaseAmount = () => setCount((prevCount) => prevCount + 1)

  const decreaseAmount = () => {
    if (count === 1) return
    setCount((prevCount) => prevCount - 1)
  }
  const addToCart = (id) => productData.find((item) => item.id === id)

  // console.log(addToCart(3))
  return (
    <GlobalContext.Provider
      value={{
        productData,
        uniqueCategory,
        filters,
        filled,
        setFilled,
        isFilled,
        setIsFilled,
        menu,
        setMenu,
        addToCart,
        count,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
