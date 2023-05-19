import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Router/Provider/AuthProvider";

const SignIn = () => {

// use ----- authProvider
const {createUser} = useContext(AuthContext);
// const [error,setError] = useState('');
// const [success,setSuccess] = useState('');
const [error , setError] = useState('');
const [success, setSuccess] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name,email, password,photo);

createUser(email,password)
.then(result =>{
       const loggedUser = result.user;        
      console.log(loggedUser);
       setError('')
      setSuccess('')
   
      form.reset();
})

.catch(error =>{
  setError(error)
  if(password.length<6){
    setError('please add at least 6 characters in your password')
  }
})

// ---------------------

  };
  return (
    <div className="min-h-screen bg-base-200 mx-auto">
      <div className="hero-content flex-col text-center">
        <div className="text-center lg:text-left w-1/2">
<h1 className="text-5xl font-bold ">Registration !</h1>
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text">Phot Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
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
              
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div>
              <p className="text-center">
                Already have an account ??{" "}
                <Link to="/login" className="text-center text-red-600">
                  Login
                </Link>
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

