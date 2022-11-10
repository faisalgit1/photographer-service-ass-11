import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddPhotoService from '../components/Pages/AddPhotoService';
import Blogs from '../components/Pages/Blogs';
import ErrorPage from '../components/Pages/ErrorPage';
import Home from '../components/Pages/Home';

import Login from '../components/Pages/Login'
import PhotoDetails from '../components/Pages/PhotoDetails';
import PhotographerCards from '../components/Pages/PhotographerCards';
import Register from '../components/Pages/Register'

import Main from '../layout/Main';


const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            loader: () => fetch('https://server-assignment-11-faisalgit1.vercel.app/home'),
            element: <Home></Home>
        },
        {
            path: '/chose-photos',
            loader: () => fetch('https://server-assignment-11-faisalgit1.vercel.app/chose-photos'),
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
        },
        {
            path: '/chose-photos/:id',
            loader: ({ params }) => fetch(`https://server-assignment-11-faisalgit1.vercel.app/chose-photos/${params.id}`),
            element: <PhotoDetails></PhotoDetails>
        },
        {
            path: '/add-service',
            element: <AddPhotoService></AddPhotoService>
        }
    ]
}])


export default routes;

