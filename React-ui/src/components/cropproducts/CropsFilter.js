import React, { useContext } from "react";
import { CropContext } from "../context";
import Title from "./Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const CropsFilter = ({ crops }) => {
  const context = useContext(CropContext);
  const {
    handleChange,
    type,
    crop,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    inorganic,
    organic,
  } = context;

  //  get unique types
  let types = getUnique(crops, "type"); // check the array for types property
  // add all
  types = ["all", ...types];
  // map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get people
  let people = getUnique(crops, "crop");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  //  controlled inputs
  return (
    <section className="filter-container">
      <Title title="search Product" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Product type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}

        {/* guests  */}
      
        {/* quests end */}

        {/* crop price */}
        <div className="form-group">
          <label htmlFor="price">Product price {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of crop price */}

       
       
      </form>
    </section>
  );
};

export default CropsFilter;
