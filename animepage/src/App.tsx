import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Layout/>, children:[
      {path:'/home', element: <Home/>}]},
      {path:'/anime/:animeName'}
   
  ])

  return (
    
    <>
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
