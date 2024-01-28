import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111617] text-white py-10 lg:py-[24px] lg:px-[80px] p-5">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link to="/">
                <span className="text-[32px] font-semibold">
                  Event <span className="gradientBg">360</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className=" uppercase ">About</h3>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  Company
                </a>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  community
                </a>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  Careers
                </a>
              </div>
              <div>
                <h3 className=" uppercase ">Blog</h3>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  Technology
                </a>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  Music
                </a>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  Videos
                </a>
              </div>
              <div>
                <h3 className=" uppercase ">Company</h3>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  About
                </a>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  Press
                </a>
                <a href="#" className="block mt-2 text-sm   hover:underline">
                  Events
                </a>
              </div>
              <div>
                <h3 className=" uppercase ">Contact</h3>
                <span className="block mt-2 text-sm   hover:underline">
                  +880 123 654 8965
                </span>
                <span className="block mt-2 text-sm   hover:underline">
                  event360@email.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6" />
        <div className="md:flex justify-between mt-10">
          <div>
            <p className="  ">© Brand 2020 - All rights reserved</p>
          </div>
          <div className="flex flex-col md:flex-row justify-end gap-5">
            <a href="#" className="block text-sm   hover:underline">
              Terms
            </a>
            <a href="#" className="block text-sm   hover:underline">
              Privacy
            </a>
            <a href="#" className="block text-sm   hover:underline">
              Contact
            </a>
            <a href="#" className="block text-sm   hover:underline">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
