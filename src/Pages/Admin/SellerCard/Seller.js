// import React, { useContext } from "react";
// import useAdmin from "../../../Component/UseAdmin/useAdmin";
// import { AuthContext } from "../../Context/ContextProvider";
// import Loader from "../../Loader/Loader";

// const Seller = ({ users, handleMakeAdmin, handleDelete }) => {
//   const { user } = useContext(AuthContext);
//   const [isAdmin, isSeller, isLoading, isUser] = useAdmin(user?.email);
//   if (isLoading) {
//     return <Loader />;
//   }
//   console.log(user);
//   return (
//     <div>
//       <h2 className="text-3xl">All Users</h2>
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>role</th>
//               <th>Admin</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users?.map((user, index) => (
//               <tr key={user?._id}>
//                 <th>{index + 1}</th>
//                 <td>{user?.name}</td>
//                 <td>{user?.email}</td>
//                 <td>{user?.role}</td>
//                 <td>
//                   {user?.role !== "admin" && (
//                     <button
//                       onClick={() => handleMakeAdmin(user?._id)}
//                       className="btn btn-xs btn-primary"
//                     >
//                       Make Admin
//                     </button>
//                   )}
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(user?._id)}
//                     className="btn btn-xs btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Seller;
