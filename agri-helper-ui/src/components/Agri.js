import React, { memo }  from "react";
import { Link } from "react-router-dom";
import defaultImg from '../images/bg.jpeg';
import PropTypes from "prop-types";

//
//can do fetch
const Agri = memo(({ agri }) => {
  // console.log(agri); // returns 3 objects
  const { name, slug, images, price,type,size } = agri;

  return (
    <article className="agri">
      <div className="img-container">
      {/* <img src={images[0] || defaultImg} alt="single agri" /> */}  {/*/before */}
        <img src={images[0] || defaultImg} alt="single agri" />
        <div className="price-top">
            <h6>{type}</h6>
            <h6>₹{price }</h6>
        </div>
        {/* dynamically link to every agri with param, show SingleAgri */}
        <Link to={`/products/${slug}`} className="btn-primary agri-link">Details</Link>
      </div>
      <div className="align">
      <p className="agri-info">{name}</p>

      <p className="agri-info">Price    :   ₹{price}    <s>  ₹{price+46} </s></p>

      <p className="agri-info">Quantity : {size} ML </p>
      </div>
    </article>
  );
});


Agri.propTypes = {
    agri : PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        // images: PropTypes.arrayOf(PropTypes.string).isRequired,
        //images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}

export default Agri;