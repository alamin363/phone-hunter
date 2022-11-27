import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeCard = ({ phoneData }) => {
  const { brand, photo } = phoneData;
  return (
    <div>
      <div className="w-96 bg-base-100 border border-primary shadow-xl mx-auto my-20">
        <figure>
          <img src={photo} className="h-96 w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <Link to={`/category/${brand}`}>
            <button className="btn btn-primary w-full">
              Go Details <FaArrowRight className="ml-3" />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
