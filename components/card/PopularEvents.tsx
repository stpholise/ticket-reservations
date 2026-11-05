import type { Event } from "@/types";
import Image from "next/image";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { formatDate } from "@/lib";

const PopularEvents = ({ event }: { event: Event }) => {
  return (
    <Link href={`/discover/${event.id}`} className="block">
      <div className="border border-gray-200 flex justify-between p-4 rounded-xl shadow-sm  text-gray-500">
        <div className=" flex flex-col gap-2 w-8/12">
          <h5 className=" text-base md:text-xl font-black text-black">
            {event.title}
          </h5>
          <p className="text-gray-500 flex items-center gap-2">
            {" "}
            <IoCalendarOutline className="size-5" />{" "}
            {formatDate(event.startsAt)}
          </p>
          <p className="text-gray-500 flex items-center gap-2 truncate ">
            {" "}
            <IoLocationOutline className="size-5 " />{" "}
            <span className="truncate w-38 md:w-full">{event.location}</span>
          </p>
          <p className=" font-black mt-auto text-primary pt-2">
            {event.ticketTypes[0].currency}
            {event.ticketTypes[0].price}
          </p>
        </div>

        <div className=" rounded-lg overflow-hidden">
          {event.imageUrl && (
            <Image
              src={event.imageUrl || "/file.svg"}
              alt={event.title}
              width="120"
              height={180}
              loading="lazy"
              className=" h-full min-w-21 md:w-29 md:h-42 object-cover"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default PopularEvents;
