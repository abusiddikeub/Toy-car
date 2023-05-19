import React from "react";
import footer from '../../../assets/image/footerlogo.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={footer} alt="" />
        <p>
         Kiddy Zone Industries Ltd.
          <br />
          Providing reliable tech since 1992,
        </p>
      </div>
      
      <div>
        <span className="footer-title bg-red-600 text-white rounded p-1">Contact Us</span>
        <a className="link link-hover">Address</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Email</a>
        <a className="link link-hover">Phone</a>
  
      </div>

      <div>
        
        <span className="footer-title bg-green-700 text-white rounded p-1">Your Account</span>
        <a className="link link-hover">Personal Info</a>
        <a className="link link-hover">Orders</a>
        <a className="link link-hover">Address</a>
        <a className="link link-hover">Credit slips</a>
      </div>
      <div>
        <span className="footer-title bg-yellow-800 text-white rounded p-1">Our Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">New Products</a>
        <a className="link link-hover">Best sales</a>
      </div>

      <div>
        <span className="footer-title bg-blue-700 text-white rounded p-1">Product</span>
        <a className="link link-hover">New Products</a>
        <a className="link link-hover">Specials</a>
        <a className="link link-hover">sitemap</a>
        <a className="link link-hover">Prices Drop</a>
      </div>
     
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2023 - All right reserved by Kiddy Zone Industries Ltd.</p>
  </div>
</footer>
    </footer>
    
  );
};

export default Footer;
