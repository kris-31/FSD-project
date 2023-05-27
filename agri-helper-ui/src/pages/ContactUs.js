import React from "react";
import Footer from "../components/Footer1";

const ContactUs = () => {
  return (
    <>
      <div className="bg">
        <div className="block" >
          <h2> CONTACT US</h2>
          <table>
          <div className="div2">
            <tr>
              <td className="gap">Phone No </td>
              <td className="gap2">:</td>
              <td className="gap1">+91728592099</td>
            </tr>
            <tr>
              <td className="gap">Email </td>
              <td className="gap2">:</td>
              <td className="gap1">agrihelper123@gmail.com</td>
            </tr>
            <tr>
              <td className="gap">Door No </td>
              <td className="gap2">:</td>
              <td className="gap1">5-13-208 , Gandhi Nagar</td>
            </tr> <tr>
              <td className="gap">Address </td>
              <td className="gap2">:</td>
              <td className="gap1">  PUDUCHERRY - 533464</td>
            </tr>
            </div>
          </table>
         
        </div>
      </div>

      <Footer />

    </>
  );
};

export default ContactUs;
