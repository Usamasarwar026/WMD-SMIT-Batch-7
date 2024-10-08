import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';

function Navigation() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/about',
            element: <About/>,
        },
        {
            path: '/contact',
            element: <Contact/>,
        },
    ]);
    return (
        <div>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </div>
    )
}

export default Navigation
