import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1280px] mx-auto py-[24px] px-[80px]">{children}</div>
  );
};

export default Container;
