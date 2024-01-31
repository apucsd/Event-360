import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CircleEllipsis } from "lucide-react";
import DeleteService from "@/crud/DeleteService";
import UpdateService from "@/crud/UpdateService";
import useServicesData from "@/hooks/useServicesData";

const ManageService = () => {
  const { services } = useServicesData();

  return (
    <div>
      <Table className="bg-white rounded-md">
        <TableCaption>A list of services.</TableCaption>
        <TableHeader className="text-start">
          <TableRow>
            {/* Add a TableRow here */}
            <TableHead>SL</TableHead>
            <TableHead>Service Image</TableHead>
            <TableHead>Service Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services?.map((service, sl) => (
            <TableRow key={service._id}>
              <TableCell className="font-medium">{sl + 1}</TableCell>
              <TableCell className="font-medium">
                <img
                  className="w-8 rounded-full h-8"
                  src={service.image as string}
                  alt=""
                />
              </TableCell>
              <TableCell className="font-medium">
                {service.serviceName}
              </TableCell>
              <TableCell className="truncate">
                <p className="font-medium truncate max-w-[20ch] overflow-ellipsis">
                  {service.description}
                </p>
              </TableCell>
              <TableCell className="font-medium">{service.price} ৳</TableCell>
              <TableCell className="font-medium">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <CircleEllipsis className="text-red-500"></CircleEllipsis>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Take a action</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <UpdateService id={service._id as string}></UpdateService>

                      <DeleteService id={service._id as string}></DeleteService>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total services</TableCell>
            <TableCell className="text-right">{services?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ManageService;
