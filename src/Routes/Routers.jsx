import React from 'react';
import Home from '../Pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import TestList from '../Pages/TestList';
import Details from '../Pages/Details';

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/all-tests",
                element: <TestList></TestList>,
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
            },
        ]
    },
]);

export default Routers;