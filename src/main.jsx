import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Error from './Error';
import Home from './Component/Home';
import ListedBooks from './Component/ListedBooks';
import PageToRead from './Component/PageToRead';
import BookDetails from './Component/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('bookCardData.json')
      },
      {
        path: "/listedBook",
        element: <ListedBooks></ListedBooks>,
        // loader:()=>fetch('bookCardData.json')
      },
      {
        path: "/pageRead",
        element: <PageToRead></PageToRead>,
        // loader:()=>fetch('bookCardData.json')
      },
      {
        path: "/bookDtails/:bookid",
        element: <BookDetails></BookDetails>,
        
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
