import App from "@/App";
import AdminLayout from "@/layouts/AdminLayout";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/pages/about/About";
import ItemManagement from "@/pages/admin/ItemManagement";
import Home from "@/pages/home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace={true}></Navigate>,
      },
      {
        path: "/admin/item-management",
        element: <ItemManagement></ItemManagement>,
      },
    ],
  },
]);
