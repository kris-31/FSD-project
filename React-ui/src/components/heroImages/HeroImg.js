import "./HeroImgStyles.css";
import { React } from "react";

import IntroImg from "../../assets/bgg.jpg";
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt='Hero Image' />
      </div>

      <div className="content">
        <p>Welcome to </p>
        <h1>Agri-Helper</h1>
        <div>
          <Link to="/project" className="btn">
            Products
          </Link>
          <Link to="/contact" className="btn btn-light">
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

