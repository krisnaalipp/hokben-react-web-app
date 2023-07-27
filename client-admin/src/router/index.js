import { createBrowserRouter } from "react-router-dom";
import { redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import CategoryTable from "../pages/TableCategory";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/categories",
        element: <CategoryTable />,
      },
    ],
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/login");
      }
    },
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
