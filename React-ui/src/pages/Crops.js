import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedCrops from "../components/FeaturedCrops";
import Hero from "../components/Hero";
import CropsContainer from "../components/CropsContainer";
import Footer from "../components/Footer1";
const Crops = () => {
  return (
    <>
    <Hero hero="cropsHero">
      <Banner title="Products">
        <Link to="/" className="btn-primary">Return Home</Link>
      </Banner>
    </Hero>
    <CropsContainer />
    <Footer/>
    </>
  );
};

export default Crops;
