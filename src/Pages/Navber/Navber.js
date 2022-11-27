import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogOut = () => {
    LogOut().then(() => {
      toast.success("LogOut success ");
      navigate("login");
    });
  };
  // direact manupuleate dashbord
  let dashborad = document.location.pathname;
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>

            <li>
              {user ? (
                <>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <Link onClick={handelLogOut}>Logout </Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Phone Hunter
        </Link>
      </div>

      {dashborad !== "/" && (
        <li>
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </li>
      )}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            {user ? (
              <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <Link onClick={handelLogOut}>Logout </Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
