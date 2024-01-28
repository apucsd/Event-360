import { cn } from "@/lib/utils";

const SectionTitles = ({
  heading,
  subHeading,
  className,
}: {
  heading: string;
  subHeading: string;
  className?: string;
}) => {
  return (
    <div className={cn(`text-center space-y-5 my-20 w-full ${className}`)}>
      <h1 className="text-[64px] font-bold">{heading}</h1>
      <p className="text-[#566B84] max-w-[80ch] mx-auto">{subHeading}</p>
    </div>
  );
};

export default SectionTitles;
