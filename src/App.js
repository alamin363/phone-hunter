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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SingUp /> },
      { path: "/blog", element: <Blog /> },
      { path: "/addproduct", element: <AddProduct /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/order", element: <MyOrders /> },
      {
        path: "/category/:id",
        element: (
          <PrivetRouter>
            <Category />
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
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
