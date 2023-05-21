import "./FooterStyles.css";
import React from "react";
import { FaInstagram } from 'react-icons/fa';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";



export const Footer = () => {

  //
  
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Villianur , Puducherry 605110</p>
              <p>India</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              7010248552
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              agrihelper@gmail.com
            </h4>
            <div className="social"> </div>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            A growing community to assist , enhance ,guide farmers.
          </p>

          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />

            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
              //onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

