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
import SignlePage from "../Pages/Home/SInglePage/SignlePage";

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
      element:<PrivateRouter><MyToy></MyToy></PrivateRouter>
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
      path:'toyDetails',
      element:<ToyDetails></ToyDetails>
     },
     {
      path:"toyDetails/:id",
      element:<ToyDetails></ToyDetails>,
      loader:({params})=>fetch(`https://assignment-11-seven.vercel.app/allToys/${params.id}`)
     },
     {
path:'singlePage',
element:<SignlePage></SignlePage>,
loader:({params})=>fetch(`https://assignment-11-seven.vercel.app/allToys/${params.id}`)
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