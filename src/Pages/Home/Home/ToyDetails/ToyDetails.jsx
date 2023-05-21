import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Category from "../Category/Category";

const ToyDetails = () => {
const toys = useLoaderData();
console.log(toys);

  return (
<div >
  <div >
               
           {toys.map(toy=><Category
           key={toy._id}
           toy={toy}
           ></Category>)}
       </div>
               </div>



  );
};

export default ToyDetails;
