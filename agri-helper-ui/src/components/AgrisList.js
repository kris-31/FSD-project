import React, { useState, useEffect } from 'react';
import Agri from "./Agri";


const AgrisList = () => {
const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/user')
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
      });
  }, []);

  if (products.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately No Product matched your search </h3>
      </div>
    );
  }

  return (
    <section className="agri-list">
      <div className="agrislist-center">
        {products.map((agri) => {
          return <Agri key={agri.id} agri={agri} />;
        })}
      </div>
    </section>
  );
};

export default AgrisList;
