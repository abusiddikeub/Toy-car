import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import OtherSection from "../OtherSection/OtherSection";
import ShopCategory from "./ShopCategory/ShopCategory";
import Category from "./Category/Category";
import GallarySection from "./GallarySection/GallarySection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <GallarySection></GallarySection>
      <OtherSection></OtherSection>
      <ShopCategory></ShopCategory>
      <Category></Category>
    </div>
  );
};

export default Home;
