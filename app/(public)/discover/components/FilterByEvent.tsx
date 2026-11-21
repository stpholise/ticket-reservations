import { useState } from "react";
import EventFilterModal from "@/components/modals/EventFilterModal";
import { FiChevronDown } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Locations } from "@/data";

const FilterByEvent = () => {
  const [value, setValue] = useState<string>(Locations[0].value);

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <div className=" md:px-8 px-6 lg:px-18">
        <p className=" text-xl">Find an event in:</p>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer flex items-center gap-2 pt-2"
        >
          <IoLocationOutline className="text-red-500 size-6" />
          <span className="text-black text-xl font-semibold capitalize">
            {value}
          </span>
          <FiChevronDown className="text-black size-4" />{" "}
        </button>
      </div>

      {showModal && (
        <EventFilterModal
          setShowModal={setShowModal}
          modalState={showModal}
          value={value}
          setValue={setValue}
          title={"Location"}
          valuesArray={Locations}
        />
      )}
    </div>
  );
};

export default FilterByEvent;
