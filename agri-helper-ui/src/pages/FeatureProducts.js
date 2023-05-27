import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import images from "../imagesfile"

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    organic: false,
    inorganic: false,
  });

  useEffect(() => {
    fetch('http://localhost:8081/api/product')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching product data');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleFilterChange = event => {
    const { name, checked } = event.target;
    setFilterOptions(prevOptions => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  useEffect(() => {
    const filtered = products.filter(product => {
      if (filterOptions.organic && !product.organic) {
        return false;
      }
      if (filterOptions.inorganic && !product.inorganic) {
        return false;
      }
      return true;
    });
    setFilteredProducts(filtered);
  }, [products, filterOptions]);


 
  // style for grid
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  };

  return (
    <div  >
      {/* <h1 >Product List</h1> */}
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',alignContent: 'space-between' }}>
        <label style={{ marginRight: '50px', fontFamily: 'Arial, sans-serif', fontSize: '20px', color: 'green' }}>
          <input
            type="checkbox"
            name="organic"
            checked={filterOptions.organic}
            onChange={handleFilterChange}
          />
          Organic 
        </label>
        <label style={{ marginRight: '50px', fontFamily: 'Arial, sans-serif', fontSize: '20px', color: 'blue' }}>
          <input
            type="checkbox"
            name="inorganic"
            checked={filterOptions.inorganic}
            onChange={handleFilterChange}  
          />
          Inorganic
        </label>
      </div>
      <section className="agri-list">
      <div className='aagrislist-center'> 
      <ul>
      <div style={gridStyle}>
        {filteredProducts.map(product => (
          <li key={product.id} >
            
           
            <article className="agri">
      <div className="img-container">
      {/* <img src={`${product.imageUrl}`} alt="single agri" /> */}
        <img src={images[product.id]} alt="single agri" /> 
        <div className="price-top">
            <h6>{product.type}</h6>
            <h6>₹{product.price }</h6>
        </div>
        {/* dynamically link to every agri with param, show SingleAgri */}
        <Link to={`/product/${product.id}`} className="btn-primary agri-link">Details</Link>
      </div>
      <div className="align">
      <p className="agri-info">{product.name}</p>

      <p className="agri-info">Price    :   ₹{product.price}    <s>  ₹{product.price+46} </s></p>

      <p className="agri-info">Quantity : {product.size} ML </p>
      </div>
    </article>
    
          </li>
        ))} </div>
      </ul>
      </div> </section>
    </div>
  );
};

export default ProductList;
