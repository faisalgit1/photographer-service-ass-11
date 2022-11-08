import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../components/Pages/Blogs';
import Home from '../components/Pages/Home';

import Login from '../components/Pages/Login'
import PhotographerCards from '../components/Pages/PhotographerCards';
import Register from '../components/Pages/Register'

import Main from '../layout/Main';


const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/phographer-select',
            loader: () => fetch('http://localhost:5000/data'),
            element: <PhotographerCards></PhotographerCards>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blog',
            element: <Blogs></Blogs>
        }
    ]
}])


export default routes;

