import SectionTitles from "@/components/ui/SectionTitles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RecentEvent = () => {
  const recentEvents = [1, 2, 3, 4, 5];
  return (
    <div className="p-20">
      <SectionTitles
        heading="Recent Events"
        subHeading="Step into the world of our latest events, where each moment tells a unique story of joy, connection, and celebration."
      ></SectionTitles>

      <Carousel>
        <CarouselContent>
          {recentEvents.map((recentEvent, i) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={i}>
              <div className="w-72 mx-auto bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-[220px] w-full mx-auto object-cover rounded-md"
                />
                <div className="my-2">
                  <p className="text-lg font-bold k truncate block capitalize">
                    Product Name
                  </p>
                  <div className="flex items-center">
                    <p className="my-3 text-[#475569]">By someone</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </div>
  );
};

export default RecentEvent;
