
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './src/App'

import Error from "./src/components/custom/Error";
import Body from "./src/components/main/Body";
import RestaurantMenu from "./src/components/custom/RestaurantMenu";
import Shimmer from "./src/components/custom/Shimmer";
import React, { Suspense } from "react";

const Grocery = React.lazy(() => import('./src/components/custom/Grocery'))
const About = React.lazy(() => import('./src/components/custom/About'))
const Contact = React.lazy(() => import('./src/components/custom/Contact'))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Shimmer />}><Contact/></Suspense> 
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);