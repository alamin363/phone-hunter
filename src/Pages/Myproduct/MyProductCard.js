import React, { useState } from "react";
import toast from "react-hot-toast";
// import AdvertiseModal from "./AdvertiseModal";
// import ModalProduct from "./ModalProduct";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaCopyright } from "react-icons/fa";
const MyProductCard = ({ dt, refetch }) => {
  const {
    Authenticity,
    Brand,
    Condition,
    Features,
    Model,
    Price,
    image,
    location,
    name,
    recelPrice,
    orginalprice,
    email,
    users,
    _id,
  } = dt;
  const deleteConfirm = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        toast.success("delete successfully");
        console.log(res);
        refetch();
      })
      .catch(() => {
        toast.error("delete filed check connection");
      });

    fetch(`http://localhost:5000/ads/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        toast.success("delete successfully");
        console.log(res);
        refetch();
      })
      .catch(() => {
        toast.error("delete filed check connection");
      });
  };

  const hadelAdvertise = (Ads) => {
    Ads.Advertised = "Ads"
    Ads.id = _id;

    fetch(`http://localhost:5000/Advertise`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify(Ads)
    }).then(res => {
      toast.success(`product Advertised`)
      
    }).catch(error => {
      toast.error(error?.message)
    })
  };
  return (
    <div>
      <div className="border relative border-primary p-10 cursor-pointer">
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="flex">
          <>
            <img src={image} className="h-62 w-52 " alt="" />
          </>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 ml-4">
            <p>
              <small className="border-b-4 font-extrabold border-primary">
                Model:
              </small>{" "}
              <small className="font-bold">{Model}</small>
            </p>
            <p>
              <small className="border-b-4 font-extrabold border-primary">
                Condition:
              </small>{" "}
              <small className="font-bold">{Condition}</small>
            </p>
            <p>
              <small className="border-b-4 font-extrabold  border-primary">
                Brand:
              </small>
              <small className="font-bold">{Brand}</small>
            </p>
            <p>
              <small className="border-b-4 font-extrabold  border-primary">
                Original Price:
              </small>
              <small className="font-bold">{orginalprice} TK</small>
            </p>

            <p>
              <small className="border-b-4 font-extrabold border-primary">
                sell Price:
              </small>
              <small className="font-bold"> {recelPrice} Tk</small>
            </p>
            <p>
              <small className="border-b-4 font-extrabold border-primary">
                Authenticity:
              </small>
              <small className="font-extrabold"> {Authenticity}</small>
            </p>
            <p>
              <small className="border-b-4 font-extrabold border-primary">
                Features:
              </small>{" "}
              <small className="font-bold">{Features}</small>
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          <p>
            <small className="border-b-4 font-extrabold border-primary">
              seller location and Post Date:
            </small>
            <small className="font-bold">{location}</small>{" "}
          </p>
          <p>
            <small className="border-b-4 font-extrabold border-primary">
              Your Email:
            </small>{" "}
            <small className="font-bold">{email}</small>{" "}
          </p>
        </div>
        <label
         onClick={() =>  deleteConfirm(_id) }
          htmlFor="delete-confirm"
          className="btn absolute right-2 top-2"
        >
          Delete 
        </label>
        <label
        onClick={() => hadelAdvertise(dt)}
          htmlFor="Advertise-confirm"
          className="btn btn-sm btn-primary absolute left-2-2 top-2"
        >
          Advertise{" "}
        </label>
      </div>
      {/*  loool  */}
      {/* <ModalProduct deleteConfirm={deleteConfirm} />
      <AdvertiseModal ads={ads} dt={dt} setAds={setAds} hadelAdvertise={hadelAdvertise} /> */}
    </div>
  );
};

export default MyProductCard;
