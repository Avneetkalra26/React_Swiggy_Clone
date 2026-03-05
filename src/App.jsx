import HomePage from './components/HomePage'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "contact",
        element: <ContactUs />
      }, {
        path: "restaurants/:resId",
        element: <MenuCard />
      }]
  },
]);
const App = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App

