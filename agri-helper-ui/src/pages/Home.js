import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer1";
import About from "../components/about";
const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="AGRI-HELPER"
          subtitle="Find all farm products @ one place"
        >
          <Link to="/products" className="btn-primary">
                       Products

          </Link>

        </Banner>
      </Hero>

      <About/>
      <Services />
     
      <Footer/>



    </>
  );
};

export default Home;
