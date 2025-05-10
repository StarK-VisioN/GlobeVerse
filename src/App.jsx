import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Country from './pages/Country'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './components/AppLayout/Layout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/AppLayout/CountryDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }
  
])

function App() {
 return(
  <RouterProvider router={router}></RouterProvider>
 )
}

export default App
