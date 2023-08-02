import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title">TO DO LIST </div>
    
      <div>{children}</div>
    </div>
  );
};

export default Template;