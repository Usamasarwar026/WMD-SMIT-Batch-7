import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../components/products/Products";
import Product from "../components/products/Product";
import AddingProduct from "../pages/product/AddingProduct";
import UpdateProduct from "../components/updateproduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "/addingproduct",
    element: <AddingProduct />,
  },
  {
    path: "/updateproduct/:id", 
    element: <UpdateProduct />,
  },
]);

function Navigation() {
  return <RouterProvider router={router} />;
}

export default Navigation;
