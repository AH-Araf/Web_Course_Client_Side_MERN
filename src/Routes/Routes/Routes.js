import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog";
import CheckOut from "../../Pages/CheckOut";
import Courses from "../../Pages/Courses";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import SingleCart from "../../Pages/SingleCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
               path: '/courses/:id',
               element: <SingleCart></SingleCart>,
               loader: async ({params}) =>  fetch(`https://a10-server-site.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: async ({params}) =>  fetch(`https://a10-server-site.vercel.app/courses/${params.id}`)
             }
        ]
    },
    {path: '*', element: <div><h1>404 Not Found Your Data</h1></div>}
])