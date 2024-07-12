import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  HomeLayout,
  Landing,
  Order,
  OrderSummary,
  Checkout,
  SuccessModal,
} from './pages'
import { products } from './data';
import { useGlobalContext } from './context';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'Order',
        element: <Order {...products[0]}/>,
      },
      {
        path: 'OrderSummary',
        element: <OrderSummary {...products[0]}/>,
      },
      {
        path: 'Checkout',
        element: <Checkout {...products[0]} />,
      },
      {
        path: 'SuccessModal',
        element: <SuccessModal />,
      },
    ],
  },
])
 
const App = () => {
 const{addToCart} = useGlobalContext()
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
