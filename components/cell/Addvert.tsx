const Addvert = () => {
  return (
    <div className="rounded-3xl p-4 md:py-6 md:px-12  h-36 lg:h-46 bg-black flex flex-row overflow-y-hidden w-full">
      <div className=" animate-slide-cycle flex flex-col ">
        <h3 className=" text-lg md:text-2xl font-semibold text-white font-">
          Never miss an event
        </h3>
        <h3 className=" text-base md:text-2xl font-semibold text-primary ">
          Get Orbit
        </h3>

        <div className="pt-4 w-40 md:max-w-xs md:w-full flex gap-4 mt-auto">
          <div className="border border-gray-600 rounded-md p-1 h-8 md:h-10 w-1/2 "></div>
          <div className="border border-gray-600 rounded-md p-1 h-8 md:h-10 w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Addvert;
