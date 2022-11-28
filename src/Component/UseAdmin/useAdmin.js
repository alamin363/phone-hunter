import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Pages/Context/ContextProvider";
import Loader from "../../Pages/Loader/Loader";

const useAdmin = (email) => {
  const { loader } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data?.role);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);
  //  setIsAdmin()
  if (loader) {
    return <Loader />;
  }
  return [isAdmin, isLoading];
};

export default useAdmin;
