import React, { useState, useEffect } from 'react';
import "../css/style.css";
import Footer from "../components/Footer1";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogdata, setBlogdata] = useState([]);

//fetch call
  useEffect(() => {
    fetch('http://localhost:8082/api/blogs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching blog data');
        }
        return response.json();
      })
      .then(data => {
        setBlogdata(data);
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            blogdata 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((blogdata) => {
                return(
                  
                  <div className="template" key={blogdata.id}>
                    <div className="tempimage">
                      <img src={blogdata.image} alt="" height="300px" width="500px" />
                    </div>
                    <div className="tempdetails">
                      <h3>{blogdata.title}</h3>
                      <p className="description">{blogdata.description}</p>
                      <br/>
                      <a href={blogdata.url} class="card-link">Read more</a>
                    </div>
                  </div> 
                )
              })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog;