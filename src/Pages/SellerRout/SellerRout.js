import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Component/UseAdmin/useAdmin';
import { AuthContext } from '../Context/ContextProvider';
import Loader from '../Loader/Loader';

const SellerRout = ({children}) => {
  const { user, loader } = useContext(AuthContext);
  const [ isSeller, isLoading] = useAdmin(user?.email);
  
  const location = useLocation();
  if (loader || isLoading) {
    return <Loader />;
  }
  //  && isAdmin
  if (user && isSeller) {
    return children;
  }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRout;