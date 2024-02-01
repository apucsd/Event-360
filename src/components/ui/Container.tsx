import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:max-w-[1280px] overflow-x-hidden mx-auto lg:py-[24px] lg:px-[80px] md:p-5">
      {children}
    </div>
  );
};

export default Container;
