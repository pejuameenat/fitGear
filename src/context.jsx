import { createContext, useContext, useState } from 'react'
import { products } from './data'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [productData, setProductData] = useState(products)
  const [filled, setFilled] = useState(true)
  const [isFilled, setIsFilled] = useState(false)
  const [menu, setMenu] = useState(false)

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
