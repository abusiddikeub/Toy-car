import React, { useContext } from "react";
import { Link } from "react-router-dom";
import profile from '../../../assets/image/logo.jpg'
import { AuthContext } from "../../../Router/Provider/AuthProvider";
import './Navber.css'

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);


const handleLogOut = () =>{
  logOut()
  .then(()=>{

  })
  .catch(error =>{
    console.log(error);
  })
}

  return (
    <div className="navbar bg-base-100 position-fixed sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
    
      {/* <div className="avatar flex-1 mt-4 mb-4">
  <div className="w-16 rounded-full ring mt-1 mx -auto ring-primary ring-offset-base-100 ring-offset-2">
    <img src={profile} />
  </div>
</div> */}
      {/* <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img src={profile}/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
              </a>
            </li>
            <li>
              <Link to='/home'><a>Home</a></Link>
            </li>
            <li>
              <Link to='/singlePage'><a>Single Page</a></Link>
            </li>
            <li>
              <Link to='/allToys'><a>All Toys</a></Link>
            </li>
            <li>
              <Link to='/myToys'><a>My Toys</a></Link>
            </li>
            <li>
              <Link to='/addToy'><a>Add A Toys</a></Link>
            </li>
            <li>
              <Link to='/blog'><a>Blog</a></Link>
            </li>
           
            <li>
              {
                user ?
                <button onClick={handleLogOut} className="btn btn-outline btn-primary">LogOut</button>:
              <Link to='/login' className="btn btn-outline btn-secondary">Login</Link> 
              }
            </li>
          </ul>
        </div>
      </div> */}
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
 
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li tabIndex={0}>
   <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <img src={profile}  className="w-24 h-24 rounded-3xl"/>
    <a className="btn btn-ghost normal-case text-xl">Car Toy</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
        <ul className="p-2">
        </ul>
      </li>
      <li>
              <Link to='/home'><a>Home</a></Link>
            </li>
            <li>
              <Link to='/singlePage'><a>Single Page</a></Link>
            </li>
          <li>  <Link to='/allToys'><a>All Toys</a></Link></li>
            <li><Link to='/blog'><a>Blog</a></Link></li>
     <li>
              {
                user ? 
                <Link to='/addToy'> <li><a>Add A Toy</a></li></Link> :
             " "
              }
              {
                user ? 
                <Link to='/myToys'><a>My Toys</a></Link> :
             " "
              }
                 {
                user ?
               <button onClick={handleLogOut} className="btn btn-outline btn-primary mt-4">LogOut</button>:
              <Link to='/login' className="btn btn-outline btn-secondary mt-4">Login</Link> 
         
              }
            
            </li>
           
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Get started</a>
  </div> */}
</div>
    </div>
  );
};

export default Navbar;
