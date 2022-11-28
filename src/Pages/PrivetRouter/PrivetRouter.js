import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import Loader from "../Loader/Loader";

const PrivetRouter = ({ children }) => {
  const { user, loader } = useContext( AuthContext );
  const location = useLocation();
  if ( loader  ) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivetRouter;
