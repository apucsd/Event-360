import SectionTitles from "@/components/ui/SectionTitles";
import { Laugh } from "lucide-react";
import { useLottie } from "lottie-react";
import FaqAnim from "../../assets/faq.json";
export const FAQ = () => {
  const { View } = useLottie({
    animationData: FaqAnim,
    loop: true,
  });

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 place-items-end justify-center">
      <div data-aos="fade-right" data-aos-duration="1000" className="py-4">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="">
            <SectionTitles
              heading="Frequently Asked"
              subHeading="Your frequently asked questions"
            ></SectionTitles>
          </div>
          <div className="">
            <ul>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width={24}
                            height={24}
                            transform="rotate(180 12 12)"
                            opacity={0}
                          />
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx={12} cy={19} r={1} />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      How can I plan a successful event?
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
                      Planning a successful event involves meticulous
                      organization. Start by defining your event goals, creating
                      a detailed plan, and coordinating with vendors. Our expert
                      event planners can guide you through the process.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                    <Laugh></Laugh>
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width={24}
                            height={24}
                            transform="rotate(180 12 12)"
                            opacity={0}
                          />
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx={12} cy={19} r={1} />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      What services do you offer for events?
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
                      We offer a range of event management services, including
                      venue selection, catering, entertainment, decorations, and
                      logistics. Our goal is to make your event unforgettable
                      and stress-free.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                    <Laugh></Laugh>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="w-full ">
        {View}
      </div>
      <div className=" md:w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-fuchsia-100 via-gray-100 to-blue-100"></div>
    </div>
  );
};
