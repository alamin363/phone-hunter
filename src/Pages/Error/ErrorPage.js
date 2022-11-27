import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="flex flex-col relative items-center h-screen p-16 bg-gray-100 text-gray-900">
      <img className="lg:absolute top-20 left-36" src={`https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1`} alt="" />
      <div className="container z-10 flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, {error?.status} this {error?.statusText} Exist{" "}
            <Link
              className="text-green-500 underline"
              to="/"
              classes="px-8 py-3 font-semibold rounded"
            >
              Back to homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
