import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Donation from './components/Donation/Donation';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Statistic from './components/Statistic/Statistic';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/donation",
        element: <Donation/>,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails/>,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/statistics",
        element: <Statistic/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
