import React, { Component } from "react";
import { CropContext } from "../context";
import Loading from "./Loading";
import Crop from "./Crop";
import Title from "./Title";

export default class FeaturedCrops extends Component {
  static contextType = CropContext;

  render() {
    let { loading, featuredCrops: crops } = this.context;
    // console.log(crops);

    crops = crops.map((crop) => {
      return <Crop key={crop.id} crop={crop} />;
    });

    return (
      <section className="featured-crops">
        <Title title="featured crops" />
        <div className="featured-crops-center">
          {loading ? <Loading /> : crops }
        </div>
      </section>
    );
  }
}
