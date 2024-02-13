import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import WebDev from "../Components/WebDev";
import Ui from "../Components/Ui";
import Seo from "../Components/SEO";
import Logo from "../Components/Logo";

const Routs = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/web',
                element:<WebDev/>
            },
            {
                path:'/ui',
                element:<Ui/>
            },
            {
                path:'/seo',
                element:<Seo/>
            },
            {
                path:'/logo',
                element:<Logo/>
            }
        ]
    }
])

export default Routs;