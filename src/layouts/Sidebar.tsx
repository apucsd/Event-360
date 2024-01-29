import { cn } from "@/lib/utils";
import { HomeIcon, LayoutDashboard } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-white rounded-md m-2 col-span-3 min-h-[98vh] sticky top-0 left-0 overflow-y-auto p-5 max-h-[98vh] ">
      <div className="mb-4 text-start hidden md:block ">
        <Link to="/">
          <span className="text-2xl font-semibold truncate">
            Event <span className="gradientBg">360</span>
          </span>
        </Link>
      </div>
      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "flex gap-1 items-center text-[14px] group bg-gray-100 hover:bg-primary hover:text-white transition-all p-1 lg:p-2 rounded-md",
              {
                "bg-primary text-white": isActive,
              }
            )
          }
        >
          <HomeIcon className="shrink-0 p-1"></HomeIcon>
          <span className="truncate">Home</span>
        </NavLink>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "flex gap-1 items-center text-[14px] group bg-gray-100 hover:bg-primary hover:text-white transition-all p-1 lg:p-2 rounded-md",
              {
                "bg-primary text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0 p-1"></LayoutDashboard>
          <span className="truncate"> Dashboard</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
