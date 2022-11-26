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
        path: "/category/:id",
        element: <Category />,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard", element: <AddProduct /> },
      { path: "/dashboard/order", element: <MyOrders /> },
      { path: "/dashboard/payment", element: <Payment /> },
      { path: "/dashboard/admin", element: <Admin /> },
      { path: "/dashboard/myproduct", element: <Myproduct /> }
 
      
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
