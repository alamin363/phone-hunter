import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/ContextProvider";
import { toast } from "react-hot-toast";
import useToken from "../../Component/useAccessToken/useToken";
import Loader from "../Loader/Loader";
const Login = () => {
  const { signInWithEmailPass, signInWithGoogle, user, setLoader, loader } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [accessTokens] = useToken(user?.email);
  const from = location.state?.from?.pathname || "/";
  if (accessTokens) {
    return navigate(from, { replace: true });
  }
  const handelGoogleLogIn = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("Login successfully");
        // userBase(res?.user?.email);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError("user not found please singUp");
        setLoader(false);
      });
  };
  const handelLoginForm = (data) => {
    signInWithEmailPass(data?.email, data?.password)
      .then((res) => {
        console.log(res);
        toast.success("Login successfully");

        // userBase(data);
      })
      .catch((err) => {
        setError("user not found please singUp");
        setLoader(false)
      });
  };
  // const userBase = (data) => {
  //   if (data) {
  //     fetch("https://used-phone-resale-server-side.vercel.app/user", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //       });
  // }
  //  }
  if (loader) {
    return <Loader />
  }
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-5 text-center">
          <h1 className="text-primary text-4xl font-bold">Sign in</h1>
        </div>
        <form onSubmit={handleSubmit(handelLoginForm)} className="space-y-6">
          <div className="space-y-4">
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
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
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
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-b-primary focus:border-b-4 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn w-full btn-primary">
              Log In
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
          Don't have a account?
          <Link
            to="/signup"
            className="underline hover:no-underline text-gray-600"
          >
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
