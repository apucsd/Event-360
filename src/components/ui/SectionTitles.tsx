import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import useScale from "@/hooks/useScale";

const SectionTitles = ({
  heading,
  subHeading,
  className,
}: {
  heading: string;
  subHeading: string;
  className?: string;
}) => {
  const { componentRef, scaleValues } = useScale();

  return (
    <motion.div
      ref={componentRef}
      style={{
        scale: scaleValues,
      }}
      className={cn(`text-center space-y-5 my-20 w-full ${className}`)}
    >
      <motion.h1 className="text-[64px] font-bold">{heading}</motion.h1>
      <motion.p className="text-[#566B84] max-w-[80ch] mx-auto">
        {subHeading}
      </motion.p>
    </motion.div>
  );
};

export default SectionTitles;
