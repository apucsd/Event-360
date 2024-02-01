import TestimonialCard from "@/components/ui/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Review = () => {
  const testimonials = [
    {
      text: "Our event was a huge success, thanks to the exceptional services provided by Event 360! From meticulous planning to flawless execution, they exceeded our expectations. The team's dedication and creativity made our special day truly memorable.",
      name: "Farhan Ahmed",
      role: "Event Host",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "Working with Event 360 was a fantastic experience. They brought our vision to life and created a magical atmosphere for our wedding. The attention to detail, professionalism, and friendly approach made the entire process stress-free and enjoyable.",
      name: "Nadia Rahman",
      role: "Bride",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      text: "I highly recommend Event 360 for any corporate gathering. Their team seamlessly coordinated our annual conference, providing top-notch logistics and ensuring a smooth flow of events. Their dedication to excellence truly sets them apart.",
      name: "Tareq Hasan",
      role: "CEO, Tech Innovations Inc.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      text: "Our event was a huge success, thanks to the exceptional services provided by Event 360! From meticulous planning to flawless execution, they exceeded our expectations. The team's dedication and creativity made our special day truly memorable.",
      name: "Farhan Ahmed",
      role: "Event Host",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "Working with Event 360 was a fantastic experience. They brought our vision to life and created a magical atmosphere for our wedding. The attention to detail, professionalism, and friendly approach made the entire process stress-free and enjoyable.",
      name: "Nadia Rahman",
      role: "Bride",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      text: "I highly recommend Event 360 for any corporate gathering. Their team seamlessly coordinated our annual conference, providing top-notch logistics and ensuring a smooth flow of events. Their dedication to excellence truly sets them apart.",
      name: "Tareq Hasan",
      role: "CEO, Tech Innovations Inc.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-l from-[#1e0044] to-[#660cd9] md:p-20 py-10  text-white ">
      <br />
      <h1 className="text-4xl md:text-6xl p-1">What everyone says</h1>

      <Carousel>
        <CarouselContent>
          {testimonials.map((testimonial, i) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={i}>
              {" "}
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                text={testimonial.text}
              ></TestimonialCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </div>
  );
};

export default Review;
