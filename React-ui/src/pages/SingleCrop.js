import React, { Component } from "react";
import defaultBcg from "../images/crop-1.jpeg";
import { CropContext } from "../context";
import { Link } from "react-router-dom";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import Footer from "../components/Footer1";

export default class SingleCrop extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }

  static contextType = CropContext;

  render() {
    const { getCrop } = this.context;
    const crop = getCrop(this.state.slug);

    if (!crop) {
      return (
        <div className="error">
          <h3>No such Product could be found</h3>
          <Link to="/crops" className="btn-primary">
            Back to Crops
          </Link>
        </div>
      );
    }

    const {
      name,
      type,
      description,
      crop,
      size,
      price,
      precautions,
      inorganic,
      organic,
      images,
    } = crop;

    // first image and the rest of the images
    const [mainImg, ...restImgs] = images;

    return (
      <>
        

        <section className="single-crop">
          <div className="single-crop-images">
            {restImgs.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>

          <div className="single-crop-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>Info</h3>
              <h6><b>Name  :</b>  {name}</h6>
              <h6><b>Price: </b> ₹{price}</h6>
              <h6><b>Size: </b> {size} ML/GRAMS</h6>
              <h6><b>
                 Crop Name:</b> 
                {crop > 1 ? `${crop} Crop`  :  ` ${crop}`}
              </h6>
              <h6>{organic ? "organic Product" : " organic Product "}</h6>
              <h6>{inorganic && " inorganic Product "}</h6>
            </article>
          </div>
        </section>

        <section className=" crop-precautions">
          <h3>Precautions</h3>
          <ul className="precautions">
            {precautions.map((item, index) => {
              return <li key={index}> {item}</li>;
            })}
          </ul>
        </section>
        <Footer/>
      </>
    );
  }
}
