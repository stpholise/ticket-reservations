import PryButton from "@/components/buttons/PryButton";
import Image from "next/image";
import { events } from "@/data";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import Addvert from "@/components/cell/Addvert";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const event = events.find((event) => event.id === id);

  console.log(event);
  if (!event) {
    notFound();
  }
  return (
    <div className=" px-4 sm:px-8 lg:px-18">
      <p className="py-6">
        <span className="text-gray-500">Discover</span> / {}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] md:gap-8 lg:gap-16 py-4">
        <div className="md:sticky top-20 h-fit">
          <div className="rounded-xl overflow-hidden ">
            <Image
              src={event.coverImage}
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
              <IoCalendarOutline className="size-5" /> {formatDate(event.date)}
            </p>
            <p className="text-gray-500 flex items-center gap-2">
              {" "}
              <IoTimeOutline className="size-5" /> {event.startTime} -{" "}
              {event.endTime}
            </p>
            <p className="text-gray-500 flex items-center gap-2 truncate ">
              {" "}
              <IoLocationOutline className="size-5 " />{" "}
              <span className="truncate w-38 md:w-full">{event.address}</span>
            </p>
            <p className="p-4 w-full bg-amber-50 text-sm  text-black rounded-lg">
              {event.city}
            </p>
          </div>

          <div className="py-8 border-t-2"></div>
          <Addvert />
        </div>
      </div>
    </div>
  );
};

export default page;
