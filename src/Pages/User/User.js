import { useQuery } from '@tanstack/react-query';
import React from 'react';

const User = () => {
  const {
    data: users = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("http://localhost:5000/user").then((res) => res.json()),
  });
  const handleMakeAdmin = (id) => {
    fetch(`https://used-phone-resale-server-side.vercel.app/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage?.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log(res);
        refetch()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://used-phone-resale-server-side.vercel.app/usersseler/${id}`,{
      method:"DELETE"
    });
  };
  return (
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
          {users?.map((user, index) => (
            <tr key={user?._id}>
              <th>{index + 1}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
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
  );
};

export default User;