import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Root from '../Layout/Root';
import CategoryNews from '../Pages/CategoryNews';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '/login',
        element: <h1>Login</h1>
    }
])

export default router;