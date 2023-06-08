import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <h1>This is login</h1>
      <Link className="btn btn-ghost" to="/signup">
        Sign Up
      </Link>
    </div>
  );
};

export default LogIn;
