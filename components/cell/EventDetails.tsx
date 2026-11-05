import Image from "next/image";
import PryButton from "../buttons/PryButton";
import Addvert from "./Addvert";
import MapWrapper from "./MapWrapper";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { formatDateDay, formatDateTime } from "@/lib";

import { getEventById } from "@/app/discover/components/fetchEvents";

const EventDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const event = await getEventById(id);

  if (!event) {
    throw new Error("Sorry an error occured ");
  }
  return (
    <div className="">
      <p className="py-6">
        <span className="text-gray-500">Discover</span> /{" "}
        <span className="text-black text-lg font-semibold"> {event.title}</span>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] md:gap-8 lg:gap-16 py-4">
        <div className="lg:sticky top-20  h-fit">
          <div className="rounded-xl overflow-hidden ">
            <Image
              src={event.imageUrl || "/file.svg"}
              alt={"test"}
              width={400}
              height={500}
              className="object-cover  w-full"
            />
          </div>
          <PryButton text={"Get a Ticket"} />
        </div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex flex-col gap-4 pb-4">
            <h2 className="text-black font-black text-3xl mb-2">
              {event?.title}
            </h2>
            <p className="text-gray-500 flex items-center gap-2">
              {" "}
              <IoCalendarOutline className="size-5" />{" "}
              {formatDateDay(event.startsAt)}
            </p>
            <p className="text-gray-500 flex items-center gap-2">
              {" "}
              <IoTimeOutline className="size-5" />{" "}
              {formatDateTime(event.startsAt)} -{" "}
              {formatDateTime(event.expiresAt)}
            </p>
            <p className="text-gray-500 flex items-center gap-2 truncate ">
              {" "}
              <IoLocationOutline className="size-5 " />{" "}
              <span className="truncate w-38 md:w-full">{event.location}</span>
            </p>
            <p className="p-4 w-full bg-amber-50 text-sm  text-black rounded-lg">
              {event.location}
            </p>
          </div>

          <div className="py-8 border-t-2">
            <h5 className="text-lg text-black font-black mb-3">Lineup</h5>
          </div>
          <div className="py-8 border-t-2">
            <h5 className="text-lg text-black font-black mb-3">
              About this event{" "}
            </h5>

            <p className="text-gray-600">{event.description}</p>
          </div>
          <Addvert />
          {/* <div className="py-8 border-b-2">
          <h5 className="text-lg text-black font-black mb-3">Organizer </h5>

          <p className="text-gray-600 flex items-center gap-2">
            {" "}
            <Image
              src={event.organizer.avatar}
              alt={"organizer"}
              width={100}
              height={100}
              className="size-14 rounded-full"
            />{" "}
            <span className=" text-black font-semibold">
              {event.organizer.name}
            </span>
          </p>
        </div> */}
          <div className="py-8 pb-10 border-b-2">
            <h5 className="text-lg text-black font-black mb-3">Direction </h5>
            <MapWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
