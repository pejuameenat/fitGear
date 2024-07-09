import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import BestSellers from './components/BestSellers'
// import SuccessModal from './components/SuccessModal'
// import Order from './components/Order'
// import OrderSummary from './components/OrderSummary'
// import Checkout from './components/Checkout'
const App = () => {
  return (
    <div className="">
      <NavBar />
      <Hero/>
      <BestSellers/>
      <Products/>
      {/* <SuccessModal/> */}
      {/* <Order/> */}
      {/* <OrderSummary/> */}
      {/* <Checkout/> */}
      <Footer/>
    </div>
  )
}

export default App
