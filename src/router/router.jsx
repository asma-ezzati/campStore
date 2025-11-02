import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductsList from "../components/ProductsList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductsList />,
  },
]);
