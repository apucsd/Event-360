import { TService } from "@/types/types";
import { Button } from "./button";

const ServiceCard = ({ service }: { service: TService }) => {
  const ul = (
    <ul className="mt-6 mb-2 space-y-1.5">
      {service?.features?.map((feature) => (
        <li className="flex items-center gap-1.5 font-medium" key={feature}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5 text-green-600 bg-white rounded-full p-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div
      data-aos="fade-up"
      className="w-full rounded-md  h-full bg-[#5A01CB0D]"
    >
      <div className="group relative p-[25px]">
        <div className="">
          <img
            className="object-cover w-full rounded-md mx-auto h-[253px]"
            src={service.image as string}
          />
          <h1 className="text-[32px] py-5 font-bold truncate">
            {service.serviceName}
          </h1>
          {ul}
        </div>

        <div className="rounded-md absolute p-[25px] top-0 left-0 w-full h-0 flex flex-col justify-start items-start bg-[#d0cdd4] opacity-0 group-hover:h-full group-hover:opacity-100 duration-300">
          <h1 className="text-[32px] py-3 font-bold text-wrap truncate">
            {service.serviceName}
          </h1>
          <p className="text-[#566B84] my-4">{service.description}</p>
          {ul}
          <Button className="w-full mt-auto">Check it out</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
