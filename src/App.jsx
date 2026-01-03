import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
import Navbar from './components/Navbar'
import Details from './components/Details'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)
  let router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    }, 
    {
      path: "/about",
      element : <><Navbar/><About/></>
    },
    {
      path:"/contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path:"/details/:id",
      element:<Details/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
