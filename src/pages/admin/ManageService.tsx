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
import { axiosInstance } from "@/lib/axiosInstance";
import { TService } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const ManageService = () => {
  const { data: services } = useQuery<TService[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosInstance("/services");
      return res.data.result;
    },
  });

  return (
    <div>
      <Table className="bg-white rounded-md">
        <TableCaption>A list of services.</TableCaption>
        <TableHeader className="text-start">
          <TableRow>
            {/* Add a TableRow here */}
            <TableHead>Service Image</TableHead>
            <TableHead>Service Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services?.map((service: TService) => (
            <TableRow key={service._id}>
              <TableCell className="font-medium">
                {service.serviceName}
              </TableCell>
              <TableCell className="font-medium">{service.price}</TableCell>
              <TableCell className="font-medium">{service.price}</TableCell>
              <TableCell className="font-medium">{service.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total services</TableCell>
            <TableCell className="text-right">{services?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ManageService;
