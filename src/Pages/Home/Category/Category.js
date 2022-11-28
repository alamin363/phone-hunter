import React, { useState } from "react";
import { FaArrowRight, FaPaypal } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "./Modal/Modal";
import "react-photo-view/dist/react-photo-view.css";
const Category = () => {
  
  const data = useLoaderData();
  const [modalData, setModalData] = useState(null);
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((singleData) => {
        return (
          <div key={singleData._id} className="w-96 border border-primary bg-base-100 shadow-xl mx-auto my-20 relative">
            <figure>
              <PhotoProvider>
                <PhotoView src={singleData.image}>
                  <img
                    className="h-96 w-full"
                    src={singleData.image}
                    alt="{singleData.name}"
                  />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{singleData.name}</h2>
              <p>
                Model:{" "}
                <small className="font-extrabold">{singleData.Model}</small>
              </p>
              <p>
                Original Price:
                <small className="font-extrabold">
                  {" "}
                  {singleData.orginalprice ? singleData.orginalprice :  25000} TK
                </small>
              </p>
              <p>
                Resale Price:
                <small className="font-extrabold">
                  {singleData.Price} TK
                </small>
              </p>
              <p>
                <small className="font-extrabold">{singleData.location}</small>
              </p>
              <p>
                Features:{" "}
                <small className="font-extrabold">{singleData.Features}</small>
              </p>

              <label
                onClick={() => setModalData(singleData)}
                className="btn btn-primary w-full absolute bottom-0 left-0"
                htmlFor="my-modal-3"
              >
                Book Now <FaPaypal />{" "}
              </label>
            </div>
            {modalData && (
              <Modal modalData={modalData} setModalData={setModalData} />
            )}
          </div>
        );
      })} 
    </div>
  );
};

export default Category;
