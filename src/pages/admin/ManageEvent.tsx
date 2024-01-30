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
import DeleteEvent from "@/crud/DeleteEvent";
import UpdateEvent from "@/crud/UpdateEvent";
import { axiosInstance } from "@/lib/axiosInstance";
import { TEvent } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { CircleEllipsis } from "lucide-react";
const ManageEvent = () => {
  const { data: events } = useQuery<TEvent[]>({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosInstance("/events");
      return res.data.result;
    },
  });
  console.log(events);
  return (
    <div>
      <Table className="bg-white rounded-md">
        <TableCaption>A list of your recent Events.</TableCaption>
        <TableHeader className="text-start">
          <TableRow>
            {/* Add a TableRow here */}
            <TableHead>SL</TableHead>
            <TableHead>Event Image</TableHead>
            <TableHead>Event Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Organizer</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events?.map((event, sl) => (
            <TableRow key={event._id}>
              <TableCell className="font-medium">{sl + 1}</TableCell>
              <TableCell className="font-medium">
                <img
                  className="w-8 rounded-full h-8"
                  src={event.image as string}
                  alt=""
                />
              </TableCell>
              <TableCell className="font-medium">{event.eventName}</TableCell>
              <TableCell className="truncate">
                <p className="font-medium truncate max-w-[20ch] overflow-ellipsis">
                  {event.description}
                </p>
              </TableCell>
              <TableCell className="font-medium">{event.location}</TableCell>
              <TableCell className="font-medium">
                {event.organizerName}
              </TableCell>
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
                      <UpdateEvent id={event._id as string}></UpdateEvent>

                      <DeleteEvent id={event._id as string}></DeleteEvent>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>Total Events</TableCell>
            <TableCell className="text-right">{events?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ManageEvent;
