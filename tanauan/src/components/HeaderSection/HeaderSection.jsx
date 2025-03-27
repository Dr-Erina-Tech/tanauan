import React from "react";
import PropTypes from "prop-types"; // For prop type validation

const HeaderSection = ({ title, description }) => {
  return (
    <header className=" text-center py-4">
      <div className="container">
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </header>
  );
};

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeaderSection;
