import SectionTitles from "@/components/ui/SectionTitles";
import ServiceCard from "@/components/ui/ServiceCard";
import { axiosInstance } from "@/lib/axiosInstance";
import { TService } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
  const { data: services } = useQuery<TService[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosInstance("/services");
      return res.data.result.slice(0, 6);
    },
  });
  return (
    <div className="relative">
      <SectionTitles
        heading="Services"
        subHeading="Crafting Unforgettable Moments, Every Angle Captured. Our 360° Event Services: Where Experiences Take Center Stage."
      ></SectionTitles>

      <div className="grid gap-6 place-items-center  md:grid-cols-2 lg:grid-cols-3 p-5">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {/* <div className=" md:w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div> */}
    </div>
  );
};

export default Services;
