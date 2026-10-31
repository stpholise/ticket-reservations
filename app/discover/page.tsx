import { IoLocationOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { events } from "@/data";

import LatestEvents from "@/components/card/LatestEvents";
import PopularEvents from "@/components/card/PopularEvents";

const page = () => {
  return (
    <div className="pt-10 text-gray-500 ">
      <div className=" md:px-8 px-6 lg:px-18">
        <p className=" text-xl">Find an event in:</p>
        <button className="flex items-center gap-2 pt-2">
          <IoLocationOutline className="text-red-500 size-6" />
          <span className="text-black text-xl font-semibold">Nigeria</span>
          <FiChevronDown className="text-black size-4" />{" "}
        </button>
      </div>

      <div className="flex gap-4   py-12 overflow-x-scroll md:scrollbar-none  w-full md:px-8 px-6 lg:px-18">
        {events.slice(0, 5).map((event, i) => (
          <LatestEvents event={event} key={i} />
        ))}
      </div>

      <div className="md:px-8 px-6 lg:px-18 mb-8">
        <div className="rounded-3xl p-4 md:py-6 md:px-12  h-36 lg:h-46 bg-black flex flex-row overflow-y-hidden">
          <div className=" animate-slide-cycle flex flex-col ">
            <h3 className=" text-lg md:text-3xl font-semibold text-white font-">
              Never miss an event
            </h3>
            <h3 className=" text-base md:text-3xl font-semibold text-primary ">Get Orbit</h3>

            <div className="pt-4 w-40 md:max-w-3xs flex gap-4 mt-auto">
              <div className="border border-gray-600 rounded-md p-1 h-8 md:h-10 w-1/2 "></div>
              <div className="border border-gray-600 rounded-md p-1 h-8 md:h-10 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 lg:px-18 flex gap-6">
        <button
          type="button"
          className="rounded-xl py-2 px-3 flex items-center gap-2 bg-black text-white font-medium"
        >
          All Events <FiChevronDown className="text-gray-500 size-4" />{" "}
        </button>
        <button
          type="button"
          className="rounded-xl py-2 px-4 flex items-center gap-2 border"
        >
          Price <FiChevronDown className="text-black size-4" />{" "}
        </button>
        <button
          type="button"
          className="rounded-xl py-2 px-4 flex items-center gap-2 border"
        >
          Date <FiChevronDown className="text-black size-4" />{" "}
        </button>
      </div>

      <div className="px-4 lg:px-18 py-8">
        <div className="flex items-center justify-between w-full mb-6">
          <h4 className="text-black font-black  text-2xl">Popular Events</h4>
          <button type="button" className="text-base text-primary font-black">
            See all
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {events.map((event) => (
            <PopularEvents key={event.id} event={event} />
          ))}
        </div>
         <button className=" w-full md:w-120 bg-primary font-medium text-base text-white py-3 px-4 rounded-md mx-auto my-14 block"> See all events</button>
      </div>
    </div>
  );
};

export default page;
