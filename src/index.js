import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './pages/landing/Landing';
import Events from './pages/events/Events';
import DisplayEvents from './pages/displayEvents/DisplayEvents';
import EditEvent from './pages/editEvent/EditEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/display",
    element : <DisplayEvents />
    
  },
  {
    path: "event/:id",
    element :<EditEvent />

  },
  {
    path : "/events/:nam",
    element: <Events />,
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
