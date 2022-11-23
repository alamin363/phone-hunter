import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/ContextProvider";
import { toast } from "react-hot-toast";
const Login = () => {
  const {
    createUserWithEmailPass,
    signInWithEmailPass,
    signInWithGoogle,
    user,
    LogOut,
  } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(user?.email);

  const handelGoogleLogIn = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("Login successfully");
        console.log(res?.user?.email);
      })
      .catch((err) => {});
  };
  const handelLoginForm = (data) => {
    console.log(data);
    signInWithEmailPass(data?.email, data?.password)
      .then((res) => {
        console.log(res);

        toast.success("Login successfully");
      })
      .catch((err) => {
        console.log(err?.message);
      });
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        </div>
        <form
          onSubmit={handleSubmit(handelLoginForm)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
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
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
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
            className="underline hover:underline-offset-0 text-gray-600"
          >
            Sign up
          </Link>
        </p>
        {errors && (
          <p className="text-red-500 font-semibold">{errors?.message}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
