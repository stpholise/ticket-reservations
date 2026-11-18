import { ImSpinner2 } from "react-icons/im";

const SuspenseFallback = ({ message }: { message?: string }) => {
  console.log(message);

  return (
    <div className="flex justify-center py-12 text-black">
      <span className="inline-flex items-center text-black">
        <span className="text-2xl font-semibold animate-pulse ">
          <ImSpinner2 className={"animate-circle size-10"} />
        </span>
        {/* <span className="ml-1 mt-auto mb-1 flex  text-xl items-end gap-1">
          <span className="animate-pulse ">
            <div className="bg-black rounded-full size-2" />
          </span>
          <span className="animate-pulse [animation-delay:200ms]">
            <div className="bg-black rounded-full size-2" />
          </span>
          <span className="animate-pulse [animation-delay:400ms]">
            <div className="bg-black rounded-full size-2" />
          </span>
        </span> */}
      </span>
    </div>
  );
};

export default SuspenseFallback;
