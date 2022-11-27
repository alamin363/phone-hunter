import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdminCard from "./AdminCard";

const Admin = () => {
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("http://localhost:5000/user").then((res) => res.json()),
  });
  if (isLoading) {
    return <h1> loading ..</h1>;
  }
  console.log(users);
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/`);
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
                <th>role</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    {!user?.role && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-xs btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
{
  /* <AdminCard key={user._id} handleMakeAdmin={handleMakeAdmin} user={user}/> */
}
export default Admin;
