import type { Event } from "@/types";
import Image from "next/image";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

const PopularEvents = ({ event }: { event: Event }) => {
  return (
    <div className="border border-gray-200 flex justify-between p-4 rounded-xl shadow-sm">
      <div className=" flex flex-col gap-2 w-8/12">
        <h5 className=" text-base md:text-xl font-black text-black">
          {event.title}
        </h5>
        <p className="text-gray-500 flex items-center gap-2">
          {" "}
          <IoCalendarOutline className="size-5" /> {event.date}
        </p>
        <p className="text-gray-500 flex items-center gap-2 truncate ">
          {" "}
          <IoLocationOutline className="size-5 " />{" "}
          <p className="truncate w-38 md:w-full">{event.address}</p>
        </p>
        <p className=" font-black mt-auto text-primary pt-2">
          {event.currency}
          {event.price}
        </p>
      </div>

      <div className=" rounded-lg overflow-hidden">
        <Image
          src={event.coverImage}
          alt={event.title}
          width="120"
          height={180}
          className=" h-full min-w-21 md:w-29 md:h-42 object-cover"
        />
      </div>
    </div>
  );
};

export default PopularEvents;
