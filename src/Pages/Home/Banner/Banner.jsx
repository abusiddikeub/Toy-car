import React from "react";
import './Banner.css';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"

    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Guardian  <br /> Of The Galaxy</h1>
          <p className="mb-5">
          Official Marvel the place in toys Gallery 
          </p>
          <button className="btn btn-primary">View Gallery</button>
        </div>
      </div>
      </div>
  );
};

export default Banner;
