import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const animate = {
    initial: {
      rotate: -780,
    },
    animate: {
      rotate: 0,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="min-h-[96px] m-auto relative text-center">
      <nav className="max-w-[1280px] mx-auto py-[24px] md:px-[80px] px-8 flex gap-4 flex-col lg:flex-row h-full  justify-between items-center w-full">
        <div className="w-full flex justify-between items-center">
          <motion.div>
            <Link to="/">
              <span className="text-[32px] font-semibold">
                Event{" "}
                <motion.span
                  variants={animate}
                  initial="initial"
                  animate="animate"
                  className="gradientBg inline-block"
                >
                  360
                </motion.span>
              </span>
            </Link>
          </motion.div>
          <div
            className="md:hidden"
            onClick={() => setShowNav((prev) => !prev)}
          >
            {showNav ? <X></X> : <Menu></Menu>}
          </div>
        </div>
        <ul
          className={`${
            showNav ? "" : "lg:static md:static absolute -top-52"
          } transition-all flex duration-1000 md:flex-row lg:flow-row flex-col gap-5 items-center justify-center text-center font-medium`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/admin">
            <Button>Dashboard</Button>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
