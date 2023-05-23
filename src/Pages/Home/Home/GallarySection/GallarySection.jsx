import React from "react";
import Gallary from "../../../../assets/image/toycar.jpg";
import Gallary1 from "../../../../assets/image/toycar6.jpg";
import Gallary2 from "../../../../assets/image/toycar2.jpg";
import Gallary3 from "../../../../assets/image/toycar3.jpg";
import Gallary4 from "../../../../assets/image/toycar4.jpg";
import Gallary5 from "../../../../assets/image/toycar5.jpg";

const GallarySection = () => {
  return (
<div className="container">
  <h2 className="text-4xl text-center text-yellow-600"> Our Gallary Section</h2>
<div className="grid md:grid-cols-3 gap-5">
<div className="card  w-96 bg-base-100 shadow-xl">
  <figure><img src={Gallary} alt="Shoes" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
    Teal toy car !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="font-semibold"> Upload date:August 26, 2009
</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Available Products</div>
    </div>
  </div>
</div>  
       {/* 2nd car */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Gallary1} alt="Shoes" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
    Toy car made of metal !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="font-semibold"> Upload date:April 19, 2021
</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Available Products</div>
    </div>
  </div>
</div>   
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Gallary2} alt="Shoes" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
    Toy car made of metal !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="font-semibold"> Upload date:April 19, 2021
</p>
    <div className="card-actions justify-end">
    <div className="badge badge-outline">Available Products</div>
    </div>
  </div>
</div>   
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Gallary3} alt="Shoes" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
    Toy car made of metal !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="font-semibold"> Upload date:April 19, 2021
</p>
    <div className="card-actions justify-end">
    <div className="badge badge-outline">Available Products</div>
    </div>
  </div>
</div>   
      {/* 3rd car */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Gallary4} alt="Shoes" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
    Teal toy car !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="font-semibold"> Upload date:August 26, 2009
</p>
    <div className="card-actions justify-end">
    <div className="badge badge-outline">Available Products</div>
    </div>
  </div>
</div>         
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Gallary5} alt="Shoes" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
    Blue toy car!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="font-semibold"> Upload date:December 07, 2009
</p>
    <div className="card-actions justify-end">
    <div className="badge badge-outline bg-purple-600">Available Products</div>
    </div>
  </div>
</div>  </div>       
</div>
  );
};

export default GallarySection;
