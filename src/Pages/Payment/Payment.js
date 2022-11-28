import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";
import PramentForm from "./PramentFrom";

const stripePromise = loadStripe("pk_test_51M6B1DFokKCixQB7Y8Z9czvVpjrMle29Y2irFLPNQSdqcVpEPrmRSxwwJM2i8EzhBnIeMuevF1Gx63LCYz1hObUo00FNk82CFQ");

const Payment = () => {
  const bookingPhone = useLoaderData();
  const navigation = useNavigation();
  
  if (navigation.state === "loading") {
    return <Loader />;
  };
 console.log(bookingPhone)
  return (
    <div className="">
      <h3 className="text-3xl">Payment for {bookingPhone[0]?.name}</h3>
      <p className="text-xl">
        pay Your Product Model<span className="font-extrabold"> {bookingPhone[0]?.Model}</span>
        
      </p>
      <div className="w-96 my-10">
        <Elements stripe={stripePromise}>
          <PramentForm booking={bookingPhone} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
