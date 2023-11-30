import React from 'react';
import Home from '../Pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import TestList from '../Pages/TestList';
import Details from '../Pages/Details';
import Signin from '../Pages/Signin';
import Authentication from '../Layouts/Authentication';
import Signup from '../Pages/Signup';
import Protection from '../Providers/Protection/Protection';
import Dashboard from '../Layouts/Dashboard';
import Profile from '../Pages/Profile';
import Appointments from '../Pages/Appointments';
import Users from '../Pages/Users';
import AdminProtector from '../Providers/Admin/AdminProtector';
import Add_Test from '../Pages/Add_Test';
import All_Test from '../Pages/All_Test';
import Error from '../Pages/Error';

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
                element: <Protection><Details></Details></Protection>,
            },
        ]
    },
    {
        path: "/authentication",
        element: <Authentication></Authentication>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/authentication/signin",
                element: <Signin></Signin>,
            },
            {
                path: "/authentication/signup",
                element: <Signup></Signup>,
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "profile",
                element: <Protection><Profile></Profile></Protection>,
            },
            {
                path: "/dashboard/appointments",
                element: <Protection><Appointments></Appointments></Protection>,
            },
            {
                path: "/dashboard/all-users",
                element: <Users></Users>,
            },
            {
                path: "/dashboard/add-test",
                element: <Add_Test></Add_Test>
            },
            {
                path: "/dashboard/all-tests",
                element: <All_Test></All_Test>
            },
        ]
    },
]);

export default Routers;