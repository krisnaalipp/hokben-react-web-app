import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail/:productId",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
