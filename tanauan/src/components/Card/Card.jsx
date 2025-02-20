import React from "react";
import "./Card.css";
import DefaultImage from "../../assets/react.svg";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      {image && (
        <img className="card-image" src={image || DefaultImage} alt={title} />
      )}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default Card;
