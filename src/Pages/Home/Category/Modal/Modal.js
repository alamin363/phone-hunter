import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/ContextProvider";

const Modal = ({ modalData, setModalData }) => {
  const { user } = useContext(AuthContext);
  const [userLocation, setUserLocation] = useState({});
  const [userNumber, setUserNumber] = useState({});
  const [userMetTimeAndDate, setuserMetTimeAndDate] = useState({});

  const {
    Price,
    Authenticity,
    Brand,
    Condition,
    Features,
    Model,
    image,
    location,
    name,
    recelPrice,
    orginalprice,
  } = modalData;
  const users = user.email;

  const myWishes = {
    Authenticity,
    Brand,
    Condition,
    Features,
    Model,
    image,
    location,
    name,
    recelPrice,
    orginalprice,
    users,
    userLocation,
    userNumber,
    userMetTimeAndDate,
  };
  const date = new Date();
  const hours = date.getHours();
  const minite = date.getMinutes();
  const secound = date.getSeconds();
  const dates = date.toLocaleDateString();
  const currentDate = { hours, minite, secound, dates };

  console.log(recelPrice);
  const handeloModaleForm = (e) => {
    e.preventDefault();
    myWishes.currentDate = currentDate;
    fetch("https://used-phone-resale-server-side.vercel.app/bookingProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myWishes),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product broking success");
      })
      .catch((err) => toast.error(err?.message));
  };
  // modalData, user.email
  // console.log(Price)
  return (
    <div className="">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold"></h3>
          <form onSubmit={handeloModaleForm} action="">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                readOnly
                defaultValue={name}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Authenticity
              </label>
              <input
                type="text"
                id="name"
                readOnly
                defaultValue={Authenticity}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Condition
              </label>
              <input
                type="text"
                id="name"
                readOnly
                defaultValue={Condition}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Model
              </label>
              <input
                type="text"
                id="name"
                readOnly
                defaultValue={Model}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                resalePrice
              </label>
              <input
                type="text"
                id="name"
                readOnly
                defaultValue={Price ? Price : 1000 }
                placeholder="Product Price"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                location and post Time
              </label>
              <input
                type="text"
                id="name"
                readOnly
                defaultValue={location}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Features
              </label>
              <input
                type="text"
                id="name"
                readOnly
                defaultValue={Features}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your phone number
              </label>
              <input
                type="number"
                id="name"
                required
                onBlur={(e) => setUserNumber(e.target.value)}
                placeholder="Your phone number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            {/* <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Market Price(new)
              </label>
              <input
                type="text"
                id="name"
                readOnly
                defaultValue={orginalprice}
                placeholder="Product Price"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div> */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your meeting location
              </label>
              <input
                type="text"
                id="name"
                required
                onBlur={(e) => setUserLocation(e.target.value)}
                placeholder="Your meeting location"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your meeting Date And Time
              </label>
              <input
                type="datetime-local"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
                onBlur={(e) => setuserMetTimeAndDate(e.target.value)}
                name=""
                id=""
              />
            </div>

            <button className="btn btn-primary w-full mt-4" type="submit">
              {" "}
              Place Your Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
