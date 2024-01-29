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
const ManageEvent = () => {
  const events = [
    {
      eventName: "Corporate Gala",
      image: "text",
      date: 12,
      location: "Grand Hall",
      description: "A night of celebration and networking.",
      features: ["Live Music", "Catering", "Awards Ceremony"],
    },
    {
      eventName: "Tech Conference",
      image: "text",
      date: 12,
      location: "Tech Hub Convention Center",
      description: "Explore the latest in technology and innovation.",
      features: ["Keynote Speakers", "Workshops", "Startup Showcase"],
    },
    {
      eventName: "Wedding Expo",
      image: "text",
      date: 12,
      location: "Dream Wedding Hall",
      description: "Everything you need for your dream wedding.",
      features: ["Fashion Show", "Vendor Booths", "Exclusive Discounts"],
    },
    {
      eventName: "Community Fun Fair",
      image: "text",
      date: 12,
      location: "City Park",
      description: "A day of fun, games, and community spirit.",
      features: ["Carnival Games", "Food Stalls", "Live Performances"],
    },
    {
      eventName: "Business Networking Breakfast",
      image: "text",
      date: 12,
      location: "Skyline Business Center",
      description: "Connect with professionals over breakfast.",
      features: [
        "Networking Sessions",
        "Guest Speakers",
        "Morning Refreshments",
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
          {events.map((event) => (
            <TableRow key={event.eventName}>
              <TableCell className="font-medium">{event.eventName}</TableCell>
              <TableCell className="font-medium">{event.location}</TableCell>
              <TableCell className="font-medium">{event.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Events</TableCell>
            <TableCell className="text-right">{events.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ManageEvent;
