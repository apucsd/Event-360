import { TService } from "@/types/types";
import { Button } from "./button";

const ServiceCard = ({ service }: { service: TService }) => {
  return (
    <div
      data-aos="fade-up"
      className="p-4 h-full group flex flex-col justify-between  bg-[#5A01CB0D] shadow-xl rounded-sm ring-1 ring-black/5 shadow-black/10"
    >
      <div>
        <div className="overflow-hidden">
          <img
            className="w-[360px] group-hover:scale-125 transition-all duration-700 h-[240px] rounded"
            src="https://s3-alpha-sig.figma.com/img/bc55/c289/cc8c7f22ea35a50e7e1293063427df1b?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1Oq4edcVQKA15X1owfwPNFasjs4aeNSmH26oqRZ923-evZYz8iBfsXWwOn6a1X-5Fz0in5NGFyiVENuQswUkIsVVCOYWcVu~d4ZIVjUTTpe4I~-Vr5aWeHgFVJgsuoiAe8rKAJoOy3IWwu04AHdUyIUPsI9jnlnD-ZBmrL-ez927eBqk0wa8Yt2eEDGbS3oqFmzk2UXt90J4p5S60KunXNlFVKesSA6TNieiQ3LMoLfi3ImwKVugato~wSe1ECBJq-gbNxpYTQNGGoqTcjj2WhDravqFnUwBhKT4eLecj5xDRCBaTfBtJAkbYSZHWBoITvGFB~0REkn5LofOufKzA__"
            alt=""
          />
        </div>
        <p className="mt-6 text-4xl font-bold tracking-tighter">
          Corporate event
        </p>
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
      </div>
      <div className="w-full invisible -mb-10 group-hover:mb-0 transition-all duration-600 opacity-0 group-hover:opacity-100 group-hover:visible">
        <Button className="w-full">Check it out</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
