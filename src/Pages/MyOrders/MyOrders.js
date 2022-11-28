import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import OrderCard from "./OrderCard/OrderCard";

const MyOrders = () => {
  const { user, loader } = useContext(AuthContext);
  const email = user?.email;
  const {
    data: bookingProduct = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["order"],
    queryFn: () =>
      fetch(`https://used-phone-resale-server-side.vercel.app/bookingProduct?email=${email}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <h1>Loading ..</h1>;
  }
  if (!bookingProduct?.length) {
    return <div>
      <h1>Your booking product  is null</h1>
      <p>Please booking Your fav. product </p>
      <div className="divider font-extrabold"></div>
      <h1 className="text-center">Or</h1>
      <div className="divider font-extrabold"></div>
      <Link to='/dashboard' className="underline bg-primary hover:no-underline  hover:scale-50"><p>Check your net Connection</p></Link>
    </div>
  }

  return (
    <div className="grid grid-cols-1 gap-3">
      {bookingProduct.map((product) => <OrderCard  key={product._id} product={product} isLoading={isLoading}/>)}
    </div>
  );
};

export default MyOrders;
