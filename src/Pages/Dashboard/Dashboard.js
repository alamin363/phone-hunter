import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Component/UseAdmin/useAdmin";
import { AuthContext } from "../Context/ContextProvider";
import Loader from "../Loader/Loader";
import Navbar from "../Navber/Navber";

const Dashboard = () => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isLoading, ] = useAdmin(user?.email);

  // 
  if (loader ) {
    return <Loader />;
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add A product</Link>
                </li>

                <li>
                  <Link to="/dashboard/myproduct">my product</Link>
                </li>
              </>
            )}

           {isAdmin === "user" && <li>
              <Link to="/dashboard/order">My orders</Link>
            </li>}

            {isAdmin === "admin" && (
              <li>
                <Link to="/dashboard/seller">seller</Link>

                <Link to="/dashboard/users">users</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
