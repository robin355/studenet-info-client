import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Share/Navbar/Home/Home";
import AddStudent from "../Page/Share/Navbar/Home/AddStudent/AddStudent";
import UpdateInfo from "../Page/Share/Navbar/Home/UpdateInfo/UpdateInfo";


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
    },
    {
        path:'/update/:id',
        element:<UpdateInfo></UpdateInfo>,
        loader: ({ params }) => fetch(`https://student-info-server-2er3iek2e-robin355.vercel.app/students/${params?.id}`)
    }
]
    }
])