import React from 'react';
import Home from '../Pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import TestList from '../Pages/TestList';
import Details from '../Pages/Details';
import Signin from '../Pages/Signin';
import Authentication from '../Layouts/Authentication';
import Signup from '../Pages/Signup';

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
    {
        path: "/authentication",
        element: <Authentication></Authentication>,
        children: [
            {
                path: "/authentication/signin",
                element: <Signin></Signin>,
            },
            {
                path: "/authentication/signup",
                element: <Signup></Signup>
            },
        ]
    },
]);

export default Routers;