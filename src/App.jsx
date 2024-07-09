import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  HomeLayout,
  Landing,
  Order,
  OrderSummary,
  Checkout,
  SuccessModal,
} from './pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
    { 
      index: true,
      element: <Landing />},
      {
        path: 'Order',
        element: <Order />,
      },
      {
        path: 'OrderSummary',
        element: <OrderSummary />,
      },
      {
        path: 'Checkout',
        element: <Checkout />,
      },
      {
        path: 'SuccessModal',
        element: <SuccessModal />,
      },
    ],
  },
])
 
const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
