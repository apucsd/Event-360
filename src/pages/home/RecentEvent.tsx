/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionTitles from "@/components/ui/SectionTitles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEventsData from "@/hooks/useEventsData";

const RecentEvent = () => {
  const { events } = useEventsData();
  const recentEvents = events
    ? events?.slice().sort((a, b) => {
        const dateA = new Date(a.date) as any;
        const dateB = new Date(b.date) as any;
        return dateB - dateA;
      })
    : [];
  return (
    <div className="md:p-12 p-3">
      <SectionTitles
        heading="Recent Events"
        subHeading="Step into the world of our latest events, where each moment tells a unique story of joy, connection, and celebration."
      ></SectionTitles>

      <Carousel>
        <CarouselContent>
          {recentEvents.map((recentEvent, i) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={i}>
              <div className="md:w-72 mx-auto bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src={recentEvent.image as string}
                  alt="Product"
                  className="h-[220px] w-full mx-auto object-cover rounded-md"
                />
                <div className="my-2 p-2">
                  <p className="text-lg font-bold k truncate block capitalize">
                    {recentEvent.eventName}
                  </p>
                  <div className="flex items-center">
                    <p className="my-3 text-[#475569]">
                      By {recentEvent.organizerName}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black md:block hidden" />
        <CarouselNext className="text-black md:block hidden" />
      </Carousel>
    </div>
  );
};

export default RecentEvent;
