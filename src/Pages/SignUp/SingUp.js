import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

const SingUp = () => {
  const {
    createUserWithEmailPass,
    updateUserProfile,
    signInWithGoogle,
    user,
    setLoader,
    loader,
  } = useContext(AuthContext);
  console.log(user);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handelGoogleLogIn = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("Login successfully");
        // userBase(res?.user?.email);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        setError(err?.message);
      });
  };

  const handelSignUpForm = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    //  env file thika value paitece na
    const url = `https://api.imgbb.com/1/upload?key=c36ec5ccc3f15f866393849181965509`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        createUserWithEmailPass(data?.email, data?.password)
          .then((res) => {
            setLoader(false);
            // console.log(res);
            updateUserProfile(data?.name, imgData.data.display_url).then(
              (data) => {
                toast.success("Account create and Login successfully");
                userBase(data);
              }
            );
          })
          .catch((err) => {
            setLoader(false);
            console.log(err?.message);
          });
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  const userBase = (data) => {
    if (data) {
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {});
    }
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-5 text-center">
          <h1 className="text-primary text-4xl font-bold">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit(handelSignUpForm)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                {...register("name")}
                id="name"
                required
                placeholder="Enter Your fullName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                {...register("image")}
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password")}
                id="password"
                required
                placeholder="input your password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">You are a Seller</span>
                <input
                  type="checkbox"
                  {...register("seller")}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="btn w-full btn-primary">
              {loader ? (
                <div className="flex justify-center items-center h-full">
                  <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white"></div>
                </div>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">Login with Google</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handelGoogleLogIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          already have a account?
          <Link
            to="/login"
            className="underline hover:no-underline text-gray-600"
          >
            Login
          </Link>
        </p>
        {error && (
          <p className="text-red-500 font-semibold">{error?.message}</p>
        )}
      </div>
    </div>
  );
};

export default SingUp;
