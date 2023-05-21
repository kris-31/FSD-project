import React, { memo }  from "react";
import { Link } from "react-router-dom";
import defaultImg from '../images/crop-1.jpeg';
import PropTypes from "prop-types";

const Crop = memo(({ crop }) => {
  // console.log(crop); // returns 3 objects
  const { name, slug, images, price,type,size } = crop;
  return (
    <article className="crop">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single crop" />
        <div className="price-top">
            <h6>{type}</h6>
            <h6>₹{price }</h6>
        </div>
        {/* dynamically link to every crop with param, show SingleCrop */}
        <Link to={`/crops/${slug}`} className="btn-primary crop-link">Details</Link>
      </div>
      <div className="align">
      <p className="crop-info">{name}</p>

      <p className="crop-info">Price    :   ₹{price}    <s>  ₹{price+46} </s></p>

      <p className="crop-info">Quantity : {size} ML </p>
      </div>
    </article>
  );
});


Crop.propTypes = {
    crop : PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}

export default Crop;