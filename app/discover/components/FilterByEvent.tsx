import React from 'react'

const FilterByEvent = () => {
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
  )
}

export default FilterByEvent