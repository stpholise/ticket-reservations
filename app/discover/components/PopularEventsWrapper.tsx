
import PopularEvents from "@/components/card/PopularEvents";
import type { Event } from "@/types";

const API_URL = "https://ticket-days.onrender.com/events";

const PopularEventsWrapper = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    next: { revalidate: 60 },
  });

  console.log(response);

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status}`);
  }

  const events: Event[] = await response.json();

  console.log("Events:", events);

  if (!events || events.length === 0) {
    return (
      <p className="py-8 text-center text-gray-500">
        No events are available at the moment.
      </p>
    );
  }

  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        {events.map((event) => (
          <PopularEvents key={event.id} event={event} />
        ))}
      </div>
      <button className=" cursor-pointer w-full md:w-120 bg-primary font-medium text-base text-white py-3 px-4 rounded-md mx-auto my-14 block">
        {" "}
        See all events
      </button>
    </div>
  );
};

export default PopularEventsWrapper;
