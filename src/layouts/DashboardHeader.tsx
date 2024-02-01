import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings2Icon } from "lucide-react";
import { toast } from "sonner";
const DashboardHeader = () => {
  return (
    <div className="h-14 lg:mb-0 mb-10 bg-white backdrop-filter px-0 mx-0 backdrop-blur-md py-2 my-2 rounded-md md:p-5 top-0 left-0 w-full">
      <div className="flex lg:flex-row md:flex-row flex-col h-full justify-between items-center">
        <Breadcrumbs></Breadcrumbs>
        <div className=" hidden md:flex justify-center items-center gap-5">
          <div>
            <Input
              className="appearance-none focus:border-none focus:outline-none ring-0 focus-visible:ring-0"
              type="email"
              placeholder="Search Here..."
            />
          </div>
          <div>
            <Button
              variant="ghost"
              onClick={() =>
                toast("This Function is under construction", {
                  description: `${new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })} at ${new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}`,
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              <Settings2Icon className="text-primary"></Settings2Icon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
