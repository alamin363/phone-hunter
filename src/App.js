import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Blog from "./Pages/Blog/Blog";
import Error from "./Pages/Error/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/SignUp/SingUp";
import { Toaster } from "react-hot-toast";
import Category from "./Pages/Home/Category/Category";
import PrivetRouter from "./Pages/PrivetRouter/PrivetRouter";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddProduct from "./Pages/AddProduct/AddProduct";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Payment from "./Pages/Payment/Payment";
import Admin from "./Pages/Admin/Admin";
import Myproduct from "./Pages/Myproduct/Myproduct";
import AdminRouter from "./Pages/AdminRouter/AdminRouter";
import PopulerProduct from "./Pages/PopulerProduct/PopulerProduct";
import SellerRout from "./Pages/SellerRout/SellerRout";
import User from "./Pages/User/User";
import DashbordCart from "./Pages/Dashboard/DashbordCart";
import Seller from "./Pages/Admin/SellerCard/Seller";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/populerproduct",
        element: <PopulerProduct />,
      },
      {
        path: "/category/:id",
        element: (
          <PrivetRouter>
            {" "}
            <Category />{" "}
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://used-phone-resale-server-side.vercel.app/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRouter>
        <Dashboard />
      </PrivetRouter>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <DashbordCart />,
      },
      // {
      //   path: "/dashboard/seller",
      //   element: (
      //     // <PrivetRouter>
      //     //   <SellerRou>
      //     <Admin />
      //     // </SellerRou>
      //     // <PrivetRouter>
      //   ),
      // },
      {
        path: "/dashboard/order",
        element: (
          // <PrivetRouter>
          <MyOrders />
          // </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          // <PrivetRouter>
          <AddProduct />
          // </PrivetRouter> *
        ),
      },
      {
        path: "/dashboard/payment/:email",
        loader: ({ params }) =>
          fetch(`https://used-phone-resale-server-side.vercel.app/bookingProduct?email=${params.email}`),
        element: (
          // <PrivetRouter>
          <Payment />
          // </PrivetRouter> *
        ),
      },
      {
        path: "/dashboard/seller",
        element: (
          <PrivetRouter>
            <AdminRouter>
              <Admin />
            </AdminRouter>
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          // <PrivetRouter>
          //   <AdminRouter>
          <User />
          // </AdminRouter>
          // </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          // <PrivetRouter>
          //   <SellerRout>
          <Myproduct />
          //   </SellerRout>
          // </PrivetRouter>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
