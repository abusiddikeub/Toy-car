import React, { useContext } from "react";
import profile from '../../../assets/image/logo.jpg'
import { Link } from "react-router-dom";
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
      {/* <div className="flex-1 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={profile} alt="" className=" mask-circle" />
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div> */}
      <div className="avatar flex-1 mt-4 mb-4">
  <div className="w-16 rounded-full ring mt-1 mx -auto ring-primary ring-offset-base-100 ring-offset-2">
    <img src={profile} />
  </div>
</div>
      <div className="flex-none gap-2">
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
             {
              user && <div>

     <img src={user.photoURL} />

              </div>
             }
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
      </div>
    </div>
  );
};

export default Navbar;
