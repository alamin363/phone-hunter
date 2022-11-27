import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Component/UseAdmin/useAdmin";
import { AuthContext } from "../Context/ContextProvider";

const AdminRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isSeller, isLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loader || isLoading) {
    return <h1> hi</h1>;
  }
  console.log(isAdmin);
  //  && isAdmin
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
