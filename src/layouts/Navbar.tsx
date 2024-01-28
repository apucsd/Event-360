import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const animate = {
    initial: {
      rotate: -780, // Rotate from top
    },
    animate: {
      rotate: 0, // Rotate to the normal position
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="min-h-[96px] m-auto text-center">
      <nav className="max-w-[1280px] mx-auto py-[24px] px-[80px] lg:flex h-full  justify-between items-center w-full">
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
        <ul className="space-x-[16px] text-center font-medium">
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
