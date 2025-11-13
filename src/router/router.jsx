import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductsList from "../components/ProductsList";
import CategoryPage from "../components/CategoryPage";
import Signin from "../components/Signin";
import AdminPage from "../components/adminPannel/AdminPage";
import EditProductForm from "../components/adminPannel/EditProductForm";
import AddProduct from "../components/adminPannel/AddProduct";
import LoadingPage from "../common/LoadingPage";
import NotFoundPage from "../common/NotFoundPage";
import SingleProductPage from "../components/SingleProductPage";
import CartPage from "../components/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/products",
    element: <ProductsList />,
  },
  {
    path: "/products/:productId",
    element: <SingleProductPage />,
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
  {
    path: "/admin/edit/:productId",
    element: <EditProductForm />,
  },
  {
    path: "/admin/add",
    element: <AddProduct />,
  },
  {
    path: "/setting",
    element: <LoadingPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);
