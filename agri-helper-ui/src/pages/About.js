import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer1";
const About = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Agri-Hepler"
          subtitle="All Products, @ One Place"
        >
          <Link to="/rooms" className="btn-primary">
            Our Agris

          </Link>

        </Banner>
      </Hero>
      
      <Services />
     
      <Footer/>
      
    </>
  );
};

export default About;
