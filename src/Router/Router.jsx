import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Home/BLog/Blog";
import Login from "../Pages/Share/Login/Login";
import SignIn from "../Pages/Share/SignIn/SignIn";
import PrivateRouter from "./Private Router/PrivateRouter";
import Error from "../Pages/Share/Error/Error";
import AddAToy from "../Pages/Home/Add Toy/AddAToy";
import MyToys from "../Pages/Home/Home/AllToy/AllToys";
import AllToys from "../Pages/Home/Home/AllToy/AllToys";
import ToyDetails from "../Pages/Home/Home/ToyDetails/ToyDetails";
import MyToy from "../Pages/Home/Home/Services/MyToy/MyToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    children:[
     {
               path:'/',
               element:<Home></Home>
     },
     {
      path:'/home',
      element:<Home></Home>         
     },
     {
   path:'/blog',
   element:<Blog></Blog>
     } ,
     {
      path:"myToys",
      element:<MyToy></MyToy>
     },
     {
      path:'addToy',
      element:<PrivateRouter><AddAToy></AddAToy></PrivateRouter>
     },
     {
     path:'allToys',
     element:<PrivateRouter><AllToys></AllToys></PrivateRouter>
     },
     {
      path:"toyDetails/:id",
      element:<ToyDetails></ToyDetails>,
      loader:({params})=>fetch(`http://localhost:5000/AllToys/${params.id}`)
     },
     {
     path:'/login',
     element:<Login></Login>
     } ,
     {
     path:'/signIn',
     element:<SignIn></SignIn>
     },
      
    ]
    
  },
{
 path:'*',
 element:<Error></Error>
}
]);
export default router;