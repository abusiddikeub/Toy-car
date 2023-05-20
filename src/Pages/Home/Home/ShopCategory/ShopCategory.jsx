import React, { useEffect, useState } from "react";
import SubCategory from "../Sub-Category/SubCategory";
import "react-tabs/style/react-tabs.css";
const ShopCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("toyTrain");

  useEffect(() => {
    fetch(`https://assignment-11-seven.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);



  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h2 className="text-center text-4xl text-green-700 mb-8">Our Sub-Category</h2>

      <div className="grid grid-cols-2"></div>
      <div className="">
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal ">
          <button
            onClick={() => handleTabClick("toyTrain")}
            className={` ${
              activeTab == "toyTrain"
                ? "bg-green-700 btn btn-outline btn-info btn btn-wide rounded hover:bg-purple-600 "
                : ""
            }`}
          >
            Toy Train
          </button>
          <button
            onClick={() => handleTabClick("toyCar")}
            className={` ${
              activeTab == "toyCar"
                ? "bg-green-700 btn btn-outline btn-success btn btn-wide"
                : ""
            }`}
          >
           Toy Car
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-16 ">
        {toys.map((toy) => (
          <SubCategory toy={toy}></SubCategory>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
