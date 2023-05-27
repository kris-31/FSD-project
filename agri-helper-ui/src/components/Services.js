import React, { useState } from "react";
import { RiAncientPavilionLine,FaBeer,RiAncientPavilionFill, FaShuttleVan } from "react-icons/ri";
import Title from "./Title";

const Services = () => {
  const obj = [
    {
      icon: < RiAncientPavilionFill/>,

      title: "Crop Management",
      info:
"We offer comprehensive crop monitoring and management solutions to help farmers track the health, growth, and development of their crops. Our services include real-time monitoring of crop conditions, disease detection, and pest management strategies."},
    {
      icon: < RiAncientPavilionLine/>,

      title: "Crop Protection Products",
      info:
"We understand the importance of protecting crops from pests, diseases, and weeds. Our crop protection products include insecticides, herbicides, fungicides, and biological control agents. We prioritize environmentally friendly and sustainable options to minimize the impact on beneficial organisms and ecosystems."
    },
    {

      icon: < RiAncientPavilionFill/>,

      title: "Agricultural Consulting",
      info:
"Our team of experienced agricultural consultants is available to provide personalized guidance and support to farmers. Whether you need assistance with crop selection, soil analysis, pest control strategies, or market analysis, our consultants have the expertise to help you make informed decisions and overcome challenges."    }
    
  ];

  const [state, setState] = useState(obj);

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {state.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
