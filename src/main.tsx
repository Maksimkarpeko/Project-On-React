import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.scss"
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Links } from 'constants/link.ts'
const router = createBrowserRouter([
  {path: Links.homePage ,element:<App/>}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
