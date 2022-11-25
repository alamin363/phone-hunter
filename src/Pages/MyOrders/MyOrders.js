import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const {
    data: bookingProduct = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["order"],
    queryFn: () =>
      fetch(`http://localhost:5000/bookingProduct?email=${email}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <h1>Loading ..</h1>;
  }
  console.log(bookingProduct);
  return (
    <div>
      {bookingProduct.map((product) => {
        return (
          <div>
            
            <div className="border m-10 cursor-wait">
              <label className="" htmlFor="">
                <h3 className="text-lg font-bold">
                  Congratulations random Internet user!
                </h3>
                <p className="py-4">
                  You've been selected for a chance to get one year of
                  subscription to use Wikipedia for free!
                </p>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrders;
