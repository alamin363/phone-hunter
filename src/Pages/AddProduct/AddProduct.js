import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

const AddProduct = () => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation()
  const email = user?.email;
  const name = user?.displayName;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handlePost = (data) => {
    data.catagory = data.Brand;
    data.email = user?.email;
    // console.log(data.image[0]);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    //  env file thika value paitece na
    const url = `https://api.imgbb.com/1/upload?key=c36ec5ccc3f15f866393849181965509`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((datas) => {
        if (datas.success) {
          data.image = datas.data.display_url;
          fetch("http://localhost:5000/postdata", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }).then(res => {
            toast.success("Product add successfully")
            // location("/")
          }).catch(() => {
            toast.error("Product added failed")
          })
        }
      })
      .catch((error) => toast.error(error?.message));
  };
  if (loader) {
    return <h1> Loading ..</h1>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handlePost)} action="">
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
          <label htmlFor="Authenticity" className="block mb-2 text-sm">
            Authenticity
          </label>
          <input
            type="text"
            defaultValue={"original"}
            {...register("Authenticity")}
            placeholder="Provide Product Authenticity"
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
            defaultValue={"Good"}
            {...register("Condition")}
            placeholder="Enter Product Condition"
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
            {...register("Model")}
            placeholder="Enter Product Model Name"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
          Brand
          </label>
          <select
            {...register("Brand", { required: true })}
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
          >
            <option value="samsung">samsung</option>
            <option value="vivo">vivo</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            orginalprice
          </label>
          <input
            type="number"
            id="name"
            {...register("orginalprice")}
            placeholder="Enter Your Product Price"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            sell Price
          </label>
          <input
            type="number"
            id="name"
            {...register("recelPrice")}
            placeholder="Enter Your Product Price"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            location
          </label>
          <input
            type="text"
            id="name"
            {...register("location")}
            placeholder="Enter Your current Location"
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
            cols="30"
            rows="10"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
          ></textarea>
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Your phone number
          </label>
          <input
            type="number"
            id="name"
            {...register("number")}
            required
            placeholder="Your phone number"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Your Email
          </label>
          <input
            type="text"
            id="email"
            defaultValue={email}
            {...register("email")}
            required
            placeholder="Your phone number"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Your Name
          </label>
          <input
            type="text"
            id="email"
            defaultValue={name}
            {...register("sellerName")}
            required
            placeholder="Your phone number"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Select Product Images
          </label>
          <input
            required
            type="file"
            id="image"
            {...register("image")}
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Your meeting Date And Time
          </label>
          <input
            type="datetime-local"
            {...register("DateTime")}
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
            id=""
          />
        </div>

        <button className="btn btn-primary w-full mt-4" type="submit">
          {" "}
          Post Your Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
