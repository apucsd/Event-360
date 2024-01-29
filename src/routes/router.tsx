import App from "@/App";
import AdminLayout from "@/layouts/AdminLayout";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/pages/about/About";
import AddEvent from "@/pages/admin/AddEvent";
import AddService from "@/pages/admin/AddService";
import Dashboard from "@/pages/admin/Dashboard";
import ManageEvent from "@/pages/admin/ManageEvent";
import ManageService from "@/pages/admin/ManageService";
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
        path: "/admin/manage-event",
        element: <ManageEvent></ManageEvent>,
      },
      {
        path: "/admin/manage-event/add-event",
        element: <AddEvent></AddEvent>,
      },
      {
        path: "/admin/manage-service",
        element: <ManageService></ManageService>,
      },
      {
        path: "/admin/manage-service/add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);
