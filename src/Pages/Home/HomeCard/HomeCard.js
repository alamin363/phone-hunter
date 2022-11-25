import React from "react";

import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";


const HomeCard = ({phoneDAta}) => {
  const  {photo, brande, _id} = phoneDAta;
  return (
    <div>
      <div className="w-96 bg-base-100 shadow-xl mx-auto my-20">
        <figure>
          <img src={photo} className="h-96 w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brande}</h2>
            <Link to={`category/${_id}`}><button className="btn btn-primary w-full">Go Details <FaArrowRight className="ml-3"/> </button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
