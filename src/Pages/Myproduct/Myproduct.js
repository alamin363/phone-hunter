import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import MyProductCard from "./MyProductCard";

const Myproduct = () => {

  const { user } = useContext(AuthContext);
  const email = user?.email;
  const {data = [], isLoading, refetch} = useQuery({queryKey:[email], queryFn: () => fetch(`http://localhost:5000/myproduct?email=${email}`)
  .then((res) => res.json())})
  
  if (isLoading) {
    return <h1>Loadding</h1>
  }
  if (user?.email) {
    refetch()
  }
  if (!data.length) {
    return <h1 className="text-2xl text-center">Sir Please add product <Link className="border-primary border-b-2 hover:border-none" to="/dashboard">Go here</Link></h1>
  }
  return (
    <div>
     {data.map( dt =>  <MyProductCard key={dt._id} refetch={refetch} dt={dt} />)}
    </div>
  );
};

export default Myproduct;
