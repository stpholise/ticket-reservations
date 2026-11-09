"use client";
import { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import EventFilterModal from "./EventFilterModal";
import { Locations } from "@/data";

const LocationModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(Locations[0].value);

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

export default LocationModal;
