import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({ product, isLoading }) => {
  console.log(product);
  const {
    users: email,
    userNumber,
    userMetTimeAndDate,
    userLocation,
    recelPrice,
    orginalprice,
    name,
    location,
    image,
    Model,
    Features,
    Condition,
    Brand,
    Authenticity,
  } = product;
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <div className="border relative border-primary p-10 cursor-pointer">
        <label className="" htmlFor="">
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
                </small>{" "}
                <small className="font-bold">{Brand}</small>
              </p>
              <p>
                <small className="border-b-4 font-extrabold  border-primary">
                  Original Price:
                </small>{" "}
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
                Buyers(Your) location:
              </small>{" "}
              <small className="font-bold">{userLocation}</small>{" "}
            </p>
            <p>
              <small className="border-b-4 font-extrabold border-primary">
                Meting Time:
              </small>{" "}
              <small className="font-bold">{userMetTimeAndDate}</small>{" "}
            </p>
            <p>
              <small className="border-b-4 font-extrabold border-primary">
                Your Email:
              </small>{" "}
              <small className="font-bold">{email}</small>{" "}
            </p>
            <p>
              <small className="border-b-4 font-extrabold border-primary">
                Your Number:
              </small>{" "}
              <small className="font-bold">{userNumber}</small>{" "}
            </p>
          </div>
        </label>
        <Link to="/dashboard/payment">
          <button className="btn btn-primary mt-5 w-52">Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;
