import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Root from './routes/root.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.tsx';
import Docs from './routes/docs.tsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root/>, 
    errorElement: <ErrorPage/>
  },
  {
    path: "docs",
    element: <Docs/>,
    errorElement: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
