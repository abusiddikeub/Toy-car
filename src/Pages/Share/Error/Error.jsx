import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div class="error text-center md:grid-cols-12">
      <h2 className="">O0pps ! Page not found</h2>
      <h1 className="">404</h1>
      <p className="">We can't find the page you're looking for .</p>
      <Link className="btn bg-danger-500 text-white p-2 rounded" to="/">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
