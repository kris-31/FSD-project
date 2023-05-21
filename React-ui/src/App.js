import React from "react";
import "./index.css";

import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import  Admin  from "./routes/Admin";
import  Books  from "./components/Admin/Users";
import Crops from "./pages/Crops";
import SingleCrop from "./pages/SingleCrop";
import { Project } from "./routes/Project";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="admin" element={<Admin />} />
        <Route exact path="/crops/" component={Crops} />
        <Route exact path="/crops/:slug" component={SingleCrop} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="contact" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
