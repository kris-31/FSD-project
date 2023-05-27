import { useEffect, useState } from "react";
import images from "../imagesfile"
const Fetchdata = () => {
  const [products, setProducts] = useState([]);
const images =["https://www.agrivi.com/wp-content/uploads/2023/05/AGRIVI-Blog-Profitability-COVER.jpg","https://www.agrivi.com/wp-content/uploads/2023/05/AGRIVI-Blog-Profitability-COVER.jpg"];
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://itproducts.onrender.com/products");
      if (!res.ok) throw new Error("Oops! An error has occured");
      const json = await res.json();

      setProducts(json);
    };
    getData();
  }, []);

  return products;
};

export default Fetchdata;
