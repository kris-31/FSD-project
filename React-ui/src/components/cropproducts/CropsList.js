import React from "react";
import Crop from "./Crop";

const CropsList = ({ crops }) => {
  if (crops.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately No Product matched your search </h3>
      </div>
    );
  }

  return (
    <section className="crop-list">
      <div className="cropslist-center">
        {crops.map((crop) => {
          return <Crop key={crop.id} crop={crop} />;
        })}
      </div>
    </section>
  );
};

export default CropsList;
