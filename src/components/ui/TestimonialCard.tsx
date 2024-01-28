type TTestimonialCard = {
  text: string;
  name: string;
  role: string;
  avatar: string;
};
const TestimonialCard = ({ text, name, role, avatar }: TTestimonialCard) => {
  return (
    <div className="flex flex-col justify-between rounded-md bg-[#503884] p-8 shadow-sm max-w-sm mx-auto mt-24">
      <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-white overflow-hidden max-h-40">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-6 ">
        <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
          <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
            <img
              src={avatar}
              width={50}
              height={50}
              className="inline-block "
              loading="lazy"
              alt={name}
            />
          </div>
        </div>
        <div>
          <p className="leading-relaxed tracking-wide text-gray-200">{name}</p>
          <p className="text-xs leading-relaxed tracking-wide text-gray-400">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
