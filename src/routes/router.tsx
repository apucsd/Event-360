import App from "@/App";
import AdminLayout from "@/layouts/AdminLayout";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/pages/about/About";
import Dashboard from "@/pages/admin/Dashboard";
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
        path: "/admin/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/admin/about",
        element: <About></About>,
      },
    ],
  },
]);
