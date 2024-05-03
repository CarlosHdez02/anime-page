import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import { AnimeProps, animeData } from "../animes"

function App() {
  const animes:AnimeProps[] = animeData
  const router = createBrowserRouter([
    {path:'/', element: <Layout animes={animes}/>, children:[
      {path:'/', element: <Home/>}]},
      {path:'/anime/:animeName'}
   
  ])

  return (
    
    <>
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
