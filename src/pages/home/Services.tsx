import SectionTitles from "@/components/ui/SectionTitles";
import ServiceCard from "@/components/ui/ServiceCard";
import useServicesData from "@/hooks/useServicesData";

const Services = () => {
  const { services } = useServicesData();
  return (
    <div className="relative">
      <SectionTitles
        heading="Services"
        subHeading="Crafting Unforgettable Moments, Every Angle Captured. Our 360° Event Services: Where Experiences Take Center Stage."
      ></SectionTitles>

      <div className="grid gap-5 md:gap-10 place-items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-5">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {/* <div className=" md:w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div> */}
    </div>
  );
};

export default Services;
