import React from "react";

const Category = (props) => {
  
  return (
    
<div>
  <div className="grid grid-cols-2 gap-5 mb-16 ">
    <div>
   < img src={props?.toy?.image} alt="" />
    <h2> {props?.toy?.price}</h2>
    <h3>{props?.toy?.postedBy}</h3>
    <h3>{props?.toy?.description}</h3>
    </div>
  </div>
</div>
        
  );
};

export default Category;
