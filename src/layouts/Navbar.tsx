import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="min-h-[96px] m-auto text-center">
      <nav className="max-w-[1280px] mx-auto py-[24px] px-[80px] lg:flex h-full  justify-between items-center w-full">
        <Link to="/">
          <span className="text-[32px] font-semibold">
            Event <span className="gradientBg">360</span>
          </span>
        </Link>
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
