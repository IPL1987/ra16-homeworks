import React from "react";

export const Card = ({ children, text, title }) => (
  <div className="card mt-3">
    {children}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="!#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
)