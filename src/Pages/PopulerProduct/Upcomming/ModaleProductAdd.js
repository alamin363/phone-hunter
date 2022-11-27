import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/ContextProvider";

const ModaleProductAdd = ({ setModalData }) => {
  const { user } = useContext(AuthContext);
  const [userLocation, setUserLocation] = useState({});
  const [userNumber, setUserNumber] = useState({});
  const [userMetTimeAndDate, setuserMetTimeAndDate] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handeloModaleForm = (data) => {
  console.log(data);
  };
  return (
    <div className="">
      <input type="checkbox" id="Add-product" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="Add-product"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold"></h3>
          <form onSubmit={handleSubmit(handeloModaleForm)} action="">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Brand
              </label>
              <input
                type="text"
                id="name"
                {...register("Brand")}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Ram
              </label>
              <input
                type="text"
                id="name"
                {...register("ram")}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Rom
              </label>
              <input
                type="text"
                id="name"
                {...register("rom")}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Display
              </label>
              <input
                type="text"
                id="name"
                {...register("Display")}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
              budget
              </label>
              <input
                type="text"
                id="name"
                {...register("budget")}
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Features
              </label>
              <textarea
                {...register("Features")}
                id=""
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your phone number
              </label>
              <input
                type="number"
                id="name"
                {...register("clientNumber")}
                placeholder="Your phone number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Product delivery Date And Time
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
              Create Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModaleProductAdd;
