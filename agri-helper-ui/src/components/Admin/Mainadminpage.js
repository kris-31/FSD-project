import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import BlogForm from "./BlogForm";
import Login from "./login";

const AdminMinPage = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  //const username = ReactSession.get("username");
  const { username } = useParams();
  console.log(username);
//   if (!(String(username) == "" || username == null)) {
//     setIsLoggedin(true);
//   }

  let content;
  if (username === 'admin') {
    content = <BlogForm />;
 } else {
    content = (
      <div>
        {/* <p>Login first</p> */}
        <Login />
      </div>
    );
  }

  return <>{content}</>;
};

export default AdminMinPage;
