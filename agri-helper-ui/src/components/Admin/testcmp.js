import React from "react";
import { ReactSession } from 'react-client-session';

export default function AnotherComponent() {
  // Retrieve session variables
  const username = ReactSession.get("username");
  const password = ReactSession.get("password");
  const email = ReactSession.get("email");

  // Use the session variables in your component logic
  // ...

  return (
    <div>
      {/* Render the component content */}
      <p>{username}</p>
    </div>
  );
}
