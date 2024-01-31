import SectionTitles from "@/components/ui/SectionTitles";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="my-10 relative">
      <SectionTitles
        heading="Ready to get started?"
        subHeading="4 days unlimited free trial. No contract or credit card required"
      ></SectionTitles>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">
        <div
          data-aos="flip-left"
          className="hover:bg-primary  group hover:text-white transition-all    rounded-2xl border  divide-y divide-gray-200 max-w-sm mx-auto mt-20"
          style={{
            boxShadow:
              "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px",
          }}
        >
          <div className="p-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold ">Starter Plan</h2>
            </div>

            <p className="mt-8">
              <span className="text-4xl font-bold tracking-tight">$49</span>
              <span className="text-base font-medium ">/month</span>
            </p>
          </div>
          <div className="px-6 pt-6 pb-8">
            <ul role="list" className="mt-6 space-y-4 ">
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Emendable Widgets for Invitations: 20
                </span>
              </li>
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white ">
                  Custom Forms for Gifts and RSVPs: 10
                </span>
              </li>
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white ">
                  Personalized Widgets and Forms with Your Theme
                </span>
              </li>

              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Guests Allowed per Celebration Space: 2
                </span>
              </li>

              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Exclusive Access to 10 Customized Event Widgets
                </span>
              </li>
            </ul>
            <Button className="w-full mt-5 font-semibold group-hover:bg-white group-hover:text-primary">
              Get this package
            </Button>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="hover:bg-primary  group hover:text-white transition-all    rounded-2xl border  divide-y divide-gray-200 max-w-sm mx-auto mt-20"
          style={{
            boxShadow:
              "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px",
          }}
        >
          <div className="p-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold ">Essential Package</h2>
            </div>

            <p className="mt-8">
              <span className="text-4xl font-bold tracking-tight">$99</span>
              <span className="text-base font-medium ">/month</span>
            </p>
          </div>
          <div className="px-6 pt-6 pb-8">
            <ul role="list" className="mt-6 space-y-4 ">
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Emendable Widgets for Invitations: 20
                </span>
              </li>
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white ">
                  Custom Forms for Gifts and RSVPs: 10
                </span>
              </li>
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white ">
                  Personalized Widgets and Forms with Your Theme
                </span>
              </li>

              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Guests Allowed per Celebration Space: 2
                </span>
              </li>

              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Exclusive Access to 10 Customized Event Widgets
                </span>
              </li>
            </ul>
            <Button className="w-full mt-5 font-semibold group-hover:bg-white group-hover:text-primary">
              Get this package
            </Button>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="hover:bg-primary  group hover:text-white transition-all    rounded-2xl border  divide-y divide-gray-200 max-w-sm mx-auto mt-20"
          style={{
            boxShadow:
              "rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px",
          }}
        >
          <div className="p-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold ">Premium Experience</h2>
            </div>

            <p className="mt-8">
              <span className="text-4xl font-bold tracking-tight">$199</span>
              <span className="text-base font-medium ">/month</span>
            </p>
          </div>
          <div className="px-6 pt-6 pb-8">
            <ul role="list" className="mt-6 space-y-4 ">
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Emendable Widgets for Invitations: 20
                </span>
              </li>
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white ">
                  Custom Forms for Gifts and RSVPs: 10
                </span>
              </li>
              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white ">
                  Personalized Widgets and Forms with Your Theme
                </span>
              </li>

              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Guests Allowed per Celebration Space: 2
                </span>
              </li>

              <li className="flex space-x-3">
                <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-white">
                  Exclusive Access to 10 Customized Event Widgets
                </span>
              </li>
            </ul>
            <Button className="w-full mt-5 font-semibold group-hover:bg-white group-hover:text-primary">
              Get this package
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300"></div> */}
    </div>
  );
};

export default Pricing;
