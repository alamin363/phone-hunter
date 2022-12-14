import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import Loader from "../Loader/Loader";
import MyProductCard from "./MyProductCard";

const Myproduct = () => {

  const { user,loader } = useContext(AuthContext);
  const email = user?.email;
  const {data = [], isLoading, refetch} = useQuery({queryKey:["email"], queryFn: () => fetch(`http://localhost:5000/myproduct?email=${email}`)
  .then((res) => res.json())})
  
  if (isLoading || loader) {
    return <Loader />
  }
  if (!data.length) {
    return <h1 className="text-2xl text-center">Sir Please add a product <Link className="border-primary border-b-2 hover:border-none" to="/dashboard">Go here</Link></h1>
  }
  return (
    <div>
     {data.map( dt =>  <MyProductCard key={dt._id} refetch={refetch} dt={dt} />)}
    </div>
  );
};

export default Myproduct;
