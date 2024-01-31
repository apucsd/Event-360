import EventCard from "@/components/ui/EventCard";
import SectionTitles from "@/components/ui/SectionTitles";
import useEventsData from "@/hooks/useEventsData";

const EventItems = () => {
  const { events } = useEventsData();
  return (
    <div className="my-10 relative">
      <SectionTitles
        heading="Event Items"
        subHeading="Transform any occasion into an unforgettable experience with our curated collection of event items. From exquisite decor and party essentials to cutting-edge technology "
      ></SectionTitles>

      <div className="grid grid-cols-12 gap-[20px] my-4">
        {events?.slice(0, 6)?.map((event, index) => (
          <EventCard event={event} index={index} key={event._id}></EventCard>
        ))}
      </div>
      <div className="w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300"></div>
    </div>
  );
};

export default EventItems;
