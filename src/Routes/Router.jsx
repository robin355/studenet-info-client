import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Share/Navbar/Home/Home";
import AddStudent from "../Page/Share/Navbar/Home/AddStudent/AddStudent";


export const router=createBrowserRouter([
    {
path:'/',
element:<Main></Main>,
children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/addStudent',
        element:<AddStudent></AddStudent>
    }
]
    }
])