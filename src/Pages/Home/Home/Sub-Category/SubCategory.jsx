import React, { useContext, } from "react";
import { AuthContext } from "../../../../Router/Provider/AuthProvider";
import { HiStar} from "react-icons/hi2";
import './SubCategory.css'
import { Link } from "react-router-dom";

const SubCategory = ({ toy }) => {
  const {user } = useContext(AuthContext);           
const {image,title, price,Rating,status} = toy
 


  return (

<div className="card card-side bg-base-100 shadow-md  ">
  <figure><img className="category" src={image} alt="Movie" data-aos="zoom-in"
     data-aos-duration="1500"  /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-purple-700 text-2xl ">Name : {status}</h2>
    <p className="text-2xl font-semibold">Seller Name : {title}</p>
    <p className="text-2xl font-semibold">Price : {price}</p>
  
<p>Rating : {Rating} </p>
<div className="flex text-yellow-400">
<HiStar></HiStar> 
    <HiStar></HiStar> 
    <HiStar></HiStar> 
    <HiStar></HiStar></div> 
    
   
  
 
    <div className="card-actions justify-end">
     <Link to='/details'> <button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    
      
 
  );
};

export default SubCategory;
