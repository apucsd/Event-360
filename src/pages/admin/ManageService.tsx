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
const ManageService = () => {
  const services = [
    {
      serviceName: "Event Registration",
      description: "Manage attendee registration for your services.",
      price: 500,
      features: [
        "Customizable Forms",
        "Payment Integration",
        "Guest List Management",
      ],
    },
    {
      serviceName: "Ticketing System",
      description: "Sell tickets online and streamline the ticketing process.",
      price: 700,
      features: [
        "Secure Ticketing Platform",
        "Promo Codes",
        "Real-time Sales Analytics",
      ],
    },
    {
      serviceName: "Event Schedule",
      description: "Create and share event schedules with attendees.",
      price: 300,
      features: [
        "Interactive Timetables",
        "Speaker Details",
        "Session Reminders",
      ],
    },
    {
      serviceName: "Speaker Management",
      description: "Manage speakers and sessions for your services.",
      price: 600,
      features: [
        "Speaker Profiles",
        "Session Coordination",
        "Presentation Upload",
      ],
    },
    {
      serviceName: "Sponsorship Management",
      description: "Attract and manage sponsors for your services.",
      price: 800,
      features: [
        "Sponsorship Packages",
        "Exhibition Spaces",
        "Branding Opportunities",
      ],
    },
  ];
  return (
    <div>
      <Table className="bg-white rounded-md">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((event) => (
            <TableRow key={event.serviceName}>
              <TableCell className="font-medium">{event.serviceName}</TableCell>
              <TableCell className="font-medium">{event.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total services</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ManageService;
