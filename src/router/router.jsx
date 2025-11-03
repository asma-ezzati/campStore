import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductsList from "../components/ProductsList";
import CategoryPage from "../components/CategoryPage";

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
]);
