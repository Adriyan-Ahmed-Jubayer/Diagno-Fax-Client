import React from 'react';
import Home from '../Pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ]
    },
]);

export default Routers;