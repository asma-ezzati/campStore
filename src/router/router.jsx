import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductsList from "../components/ProductsList";
import CategoryPage from "../components/CategoryPage";
import Signin from "../components/Signin";
import AdminPage from "../components/adminPannel/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductsList />,
  },
  {
    path: `/categories/:catId`,
    element: <CategoryPage />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);
