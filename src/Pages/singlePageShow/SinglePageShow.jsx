import React from "react";

const SinglePageShow = ({ page }) => {
  const { _id, title, price, Quantity,image,postedBy } = page;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> Seller Name : {title}</h2>
        <p>Quantity : {Quantity}</p>
        <p> Price : {price}</p>
        <p> PostedBy : {postedBy}</p>

        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePageShow;
