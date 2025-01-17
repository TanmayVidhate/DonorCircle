import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './views/Landing';
import Records from './views/Records';
import Details from './views/Details';
import Adddata from './views/Adddata';
import EditInfo from './views/EditInfo';
import PagenotFound from './views/PagenotFound';

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
        element: <Details />
    },
    {
        path: "/addinfo",
        element: <Adddata />
    },
    {
        path: "/editinfo/:userid",
        element: <EditInfo />
    },
    {
        path: "*",
        element: <PagenotFound />
    }
])
root.render(
    <RouterProvider router={router} />
);


