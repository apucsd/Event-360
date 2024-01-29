import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 bg-[#DFE0E1]">
      <div className="col-span-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-10 relative">
        <DashboardHeader></DashboardHeader>
        <div className=" p-4  min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
