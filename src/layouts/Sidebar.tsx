import { cn } from "@/lib/utils";
import {
  Calendar,
  CalendarPlus,
  Cog,
  CopyPlus,
  LayoutDashboard,
  MoveLeft,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Sidebar = () => {
  return (
    <aside className="bg-white text-slate-700 rounded-md m-2 col-span-3 min-h-[100vh] sticky top-0 left-0 overflow-y-auto p-5 max-h-[98vh] ">
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
              "flex gap-1 items-center text-[14px] group  hover:bg-gray-100 hover:text-primary transition-all p-1 lg:p-2 rounded-md",
              {
                "bg-gray-100 text-primary": isActive,
              }
            )
          }
        >
          <MoveLeft className="shrink-0 p-1"></MoveLeft>
          <span className="truncate">Back Home</span>
        </NavLink>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "flex gap-1 items-center text-[14px] group  hover:bg-gray-100 hover:text-primary transition-all p-1 lg:p-2 rounded-md",
              {
                "bg-gray-100 text-primary": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0 p-1"></LayoutDashboard>
          <span className="truncate"> Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/manage-service"
          className={({ isActive }) =>
            cn(
              "flex gap-1 items-center text-[14px] group  hover:bg-gray-100 hover:text-primary transition-all p-1 lg:p-2 rounded-md",
              {
                "bg-gray-100 text-primary": isActive,
              }
            )
          }
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-start gap-1 truncate">
                <Cog className="shrink-0 p-1"></Cog>{" "}
                <div className="truncate block">Manage Service</div>
              </AccordionTrigger>
              <AccordionContent className="flex">
                <NavLink
                  className={({ isActive }) =>
                    cn("flex items-center gap-1 truncate text-gray-700", {
                      "border-t-2  border-white text-primary w-full pt-2 transition-all duration-300":
                        isActive,
                    })
                  }
                  to="/admin/manage-service/add-service"
                >
                  <CopyPlus className="shrink-0 p-1"></CopyPlus>
                  <span className="truncate block">Add Services</span>
                </NavLink>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </NavLink>
        <NavLink
          to="/admin/manage-event"
          className={({ isActive }) =>
            cn(
              "flex gap-1 items-center text-[14px] group  hover:bg-gray-100 hover:text-primary transition-all p-1 lg:p-2 rounded-md",
              {
                "bg-gray-100 text-primary": isActive,
              }
            )
          }
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-start gap-1 truncate">
                <Calendar className="shrink-0 p-1"></Calendar>{" "}
                <div className="truncate block">Manage Event</div>
              </AccordionTrigger>
              <AccordionContent className="flex">
                <NavLink
                  className={({ isActive }) =>
                    cn("flex items-center gap-1 truncate text-gray-700", {
                      "border-t-2  border-white text-primary  w-full pt-2 transition-all duration-300":
                        isActive,
                    })
                  }
                  to="/admin/manage-event/add-event"
                >
                  <CalendarPlus className="shrink-0 p-1"></CalendarPlus>
                  <span className="truncate block">Add Event</span>
                </NavLink>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
