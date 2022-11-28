import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/ContextProvider";
import Loader from "../Loader/Loader";
import AdminCard from "./AdminCard";
import Seller from "./SellerCard/Seller";

const Admin = () => {
  const { loader } = useContext(AuthContext);

  const {
    data: seller = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("http://localhost:5000/seller").then((res) => res.json()),
  });
  if (isLoading || loader) {
    return <Loader />;
  }
  console.log(seller);

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage?.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleMakeVarify = (id) => {
    fetch(`http://localhost:5000/verified/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage?.getItem("accessToken")}`,
      },
    }).then(res => {
      refetch()
      toast.success("seller verified successfully")
    }).catch(error => toast.error(error.message))
  };
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/usersseler/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        refetch();
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl">All Users</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>verified</th>
                <th>role</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {seller?.map((user, index) => (
                <tr key={user?._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.verified !== true ? (
                      <button
                        onClick={() => handleMakeVarify(user?._id)}
                        className="btn btn-xs btn-primary"
                      >
                        verified
                      </button>
                    ) : (
                      <p className="text-primary">true</p>
                    )}
                  </td>
                  <td>{user?.role}</td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user?._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user?._id)}
                      className="btn btn-xs btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Seller users={users} handleMakeAdmin={handleMakeAdmin} handleDelete={handleDelete}></Seller> */}
    </div>
  );
};
{
  /* <AdminCard key={user._id} handleMakeAdmin={handleMakeAdmin} user={user}/> */
}
export default Admin;
