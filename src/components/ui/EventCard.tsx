/* eslint-disable no-constant-condition */

import { TEvent } from "@/types/types";

const EventCard = ({ index, event }: { index: number; event: TEvent }) => {
  // console.log(index);
  return (
    <div
      data-aos="zoom-in"
      className={`${
        index === 0 || index === 1
          ? "col-span-12 lg:col-span-6"
          : "col-span-12 md:col-span-6 lg:col-span-4"
      } group bg-[#5A01CB0D] p-4 rounded-md`}
    >
      <div className=" overflow-hidden ">
        <img
          className="w-[547px] group-hover:scale-125 group-hover:-translate-y-8 transition-all duration-500 h-[332px] rounded-md mx-auto"
          src={event.image as string}
          alt=""
        />
      </div>
      <h2 className="text-2xl font-medium my-5">{event.eventName}</h2>
    </div>
  );
};

export default EventCard;
