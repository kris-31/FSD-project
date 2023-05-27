import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer1";
import images from "../imagesfile"

const SingleAgri = (props) => {
  const [products, setProducts] = useState([]);
  const { pathid } = useParams();

  console.log(pathid);
  //get data
  useEffect(() => {
    fetch('http://localhost:8081/api/product/'+String(pathid))
      .then(response => {
        if (!response.ok) {
          
          throw new Error('Error fetching product data');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error:', error);
        console.log(products.id);
      });
  }, []);

  if (!products) {
    return (
      <div className="error">
        <h3>No such product could be found...</h3>
        <Link to="/products" className="btn-primary">
          Back to products
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    price,
    size,
    crop,
    organic,
    inorganic,
    precautions,
  } = products;

  return (
    <>
      <section className="single-agri">
        <div className="single-agri-images">
          <img src={images[pathid]} alt={name} />
        </div>

        <div className="single-agri-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>

          <article className="info">
            <h3>Info</h3>
            <h6>
              <b>Name:</b> {name}
            </h6>
            <h6>
              <b>Price: </b>₹{price}
            </h6>
            <h6>
              <b>Size: </b> {size} ML/GRAMS
            </h6>
            <h6>
              <b>Crop Name:</b>{" "}
              {crop > 1 ? `${crop} Crop` : ` ${crop}`}
            </h6>
            <h6><b>Category :</b> {organic ? "Organic Product" : "Non-Organic Product"}</h6>
            {/* <h6>{inorganic && "Inorganic Product"}</h6> */}
          </article>
        </div>
      </section>

      <section className="agri-precautions">
        <h3>Precautions</h3>
        <ul className="precautions">
        {precautions && precautions.split('\n').map((precaution, index) => (
      <li key={index}>{precaution}</li>
    ))}
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default SingleAgri;
