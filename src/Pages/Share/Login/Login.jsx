import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Router/Provider/AuthProvider";
import Swal from 'sweetalert2'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/home'

  const [user, setUser] = useState(null);


  const auth = getAuth(app);
  console.log(auth);
  const provider = new GoogleAuthProvider();
  
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

// use provider ------------



const [success,setSuccess] = useState('')


const handleLogin =(event) =>{
               event.preventDefault()
               const form = event.target;
               const email = form.email.value;
               const password = form.password.value;
               console.log(email,password);

               signIn(email,password)
               .then(result =>{
                   const signIn = result.user;
                   console.log(signIn);
                   setError('')
                   event.target.reset();
                   navigate(from,{replace:true})
                   Swal.fire({
                    title: 'success!',
                    text: 'You have successfully Login',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

               })
               .catch(error =>{
                              console.log(error);
              
               })

}

  return (
    <div className="min-h-screen bg-base-200 mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold ">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form 
            onSubmit={handleLogin}
            
            >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login"  className="btn btn-primary" />
            </div>
            </form>
            <div>
              <p className="text-center"> are you new? sign In here.. ??  <Link to='/signIn' className="text-center text-red-600">SignIn</Link></p>
            
            </div>
            <div className="mx-auto">

            <button className="btn btn-outline btn-success" onClick={handleGoogleSignIn}> <FaGoogle className="text-red-600 me-2"/> Google Login</button>
   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
