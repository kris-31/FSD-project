import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Footer from "../components/Footer1";
import FeatureProducts from "./FeatureProducts";
const Agris = () => {
  return (
    <>
    <Hero>
      <Banner title="Products">
        <Link to="/" className="btn-primary">Return Home</Link>
      </Banner>
    </Hero>
    {/* call component */}
    <FeatureProducts />
    <Footer/>
    </>
  );
};

export default Agris;
