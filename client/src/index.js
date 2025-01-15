import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './views/Landing';
import Records from './views/Records';
import Details from './views/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/records",
        element: <Records />
    },
    {
        path: "/details/:userid",
        element: <Details/>
    }
])
root.render(
    <RouterProvider router={router} />
);


