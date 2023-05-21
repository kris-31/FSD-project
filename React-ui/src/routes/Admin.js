import React from "react";
// import { ListEmployeeComponent } from "../components/Admin/Emp/ListEmployeeComponent";
import { Footer } from "../components/footer/Footer";
import  ListEmployeeComponent  from '../components/Admin/Emp/ListEmployeeComponent';
 


 const Admin = () => {
  
  return (
    <div>
      <ListEmployeeComponent />
      
      <Footer />
    </div>
  );
};
export default Admin;
