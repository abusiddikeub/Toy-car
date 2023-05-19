import React from "react";
import banner from '../../../assets/image/banner.jpg';
import banner1 from '../../../assets/image/banner1.jpg';
import banner2 from '../../../assets/image/banner2.jpg';
import banner3 from '../../../assets/image/banner3.jpg';
import banner4 from '../../../assets/image/banner4.jpg';
import banner5 from '../../../assets/image/banner5.jpg';
import banner6 from '../../../assets/image/banner6.jpg';



const About = () => {
  return (
<div className=" bg-base-200 mt-10 mb-10">
  <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
  <div className="h-96 carousel carousel-vertical rounded-box">

  <div className="carousel-item h-full">
    <img src={banner} />
  </div> 

  <div className="carousel-item h-full">
    <img src={banner1}/>
  </div> 
  <div className="carousel-item h-full">
    <img src={banner2} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner3} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner5} />
  </div> 
  <div className="carousel-item h-full">
    <img src={banner6} />
  </div> 
  
</div>
    <div>
      <h1 className="text-5xl font-bold text-purple-500">Welcome to Our Car Shop</h1>
      <p className="py-6">There are many variations of passages of Lorem ipsum available, but <br /> the majority have suffered alteration in some injected.</p>
      <button class="btn btn-outline btn-secondary py-5 px-7">Shop Now </button>
    </div>
  </div>
</div>
  );
};

export default About;
