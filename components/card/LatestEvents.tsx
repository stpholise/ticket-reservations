import type { Event } from "@/types";
import Image from "next/image";

const LatestEvents = ({ event }: { event: Event }) => {
  return (
    <div className="rounded-2xl font-helvetica overflow-hidden min-w-62 md:min-w-50 flex-1 bg-black backdrop-blur-lg">
      <div className="relative h-82 md:h-100">
        <Image
          src={event.coverImage}
          alt={event.title}
          width={200}
          height={300}
          className="h-10/12 w-full  object-cover"
        />
        <div className="absolute  w-full bottom-0 bg-balck/60 backdrop-blur-xs px-1 pt-2 pb-4 flex flex-col gap-2">
          <h5 className="uppercase text-center text-sm  font-medium text-white">
            {event.category}
          </h5>
          <h3 className=" text-white font-black text-2xl text-center">
            {event.title}
          </h3>
          <p className="text-white text-center">{event.date}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestEvents;
