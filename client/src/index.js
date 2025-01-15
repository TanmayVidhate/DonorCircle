import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createBrowserRouter,RouterProvider}  from 'react-router-dom';

import Landing from './components/Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
    {
        path:"/",
        element:<Landing/>
    }
])
root.render(
    <RouterProvider router={router} />
);


