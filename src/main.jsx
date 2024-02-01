import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Details from './Category/Details';
import Layout from './Layout/Layout';
import AuthProvider from '../public/Provider/AuthProvider';
import SignUp from './SignUp/SignUp';
import Signin from './Signin/Signin';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/get-one/:id',
        element:<Details/>,
        loader:({params})=>fetch(`http://localhost:5000/get-one/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
