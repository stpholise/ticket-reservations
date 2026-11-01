"use server";

import { IoLocationOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { events } from "@/data";
// import { getEvents } from "./components/fetchEvents";
import LatestEvents from "@/components/card/LatestEvents";
import PopularEvents from "@/components/card/PopularEvents";
import Addvert from "@/components/cell/Addvert";

const page = async () => {
  // const myEvents = await getEvents();

  // console.log(myEvents);
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
        <Addvert />
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
        <button className=" w-full md:w-120 bg-primary font-medium text-base text-white py-3 px-4 rounded-md mx-auto my-14 block">
          {" "}
          See all events
        </button>
      </div>
    </div>
  );
};

export default page;
