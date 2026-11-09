

import LocationModal from "@/components/modals/LocationModal";
import { events } from "@/data";
import LatestEvents from "@/components/card/LatestEvents";
import Addvert from "@/components/cell/Addvert";
import SuspenseFallback from "@/components/cell/SuspenseFallback";
import { Suspense } from "react";
import ErrorWrapper from "@/components/ErrorWrapper";
import PopularEventsWrapper from "./components/PopularEventsWrapper";
 
import Filters from "./components/Filters";

const page = async() => {
  

  return (
    <div className="pt-10 text-gray-500 ">
     

      <LocationModal />

      <div className="flex gap-4   py-12 overflow-x-scroll md:scrollbar-none  w-full md:px-8 px-6 lg:px-18">
        {events.slice(0, 5).map((event, i) => (
          <LatestEvents event={event} key={i} />
        ))}
      </div>

      <div className="md:px-8 px-6 lg:px-18 mb-8">
        <Addvert />
      </div>

      <Filters />
 

      <div className="px-4 lg:px-18 py-8">
        <div className="flex items-center justify-between w-full mb-6">
          <h4 className="text-black font-black  text-2xl">Popular Events</h4>
          <button type="button" className=" cursor-pointer text-base text-primary font-black">
            See all
          </button>
        </div>
         <Suspense fallback={<SuspenseFallback />}>
        <ErrorWrapper title="Error Getting events">
          <PopularEventsWrapper />
        </ErrorWrapper>
      </Suspense>

      
       
      </div>
    </div>
  );
};

export default page;
