import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data?.isAdmin);
        setIsSeller(data?.seller);
        setIsLoading(false);
        console.log(data);
      });
  }, [email]);
  //  setIsAdmin()

  return [isAdmin, isSeller, isLoading];
};

export default useAdmin;
