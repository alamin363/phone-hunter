import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navber/Navber";

const Dashboard = () => {
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

            
            <li>
              <Link to="/dashboard">Add A product</Link>
            </li>
            <li>
              <Link to="/dashboard/myproduct">my product</Link>
            </li>
            <li>
              <Link to="/dashboard/order">My orders</Link>
            </li>
            <li>
              <Link to="/dashboard/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
