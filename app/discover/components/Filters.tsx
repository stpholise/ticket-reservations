"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import EventFilterModal from "@/components/modals/EventFilterModal";
import { filterOptions, FilterType } from "@/data";

const Filters = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

  const handleOpenModal = (filter: FilterType) => {
    setActiveFilter(filter);
    setShowModal(true);
  };

  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
    date: "all",
  });

  const handleSetValue = (value: string) => {
    if (!activeFilter) return;

    setFilters((prev) => ({
      ...prev,
      [activeFilter]: value,
    }));
  };

  const currentFilter = activeFilter ? filterOptions[activeFilter] : null;

  const getFilterLabel = (filter: FilterType) => {
    return (
      filterOptions[filter].valuesArray.find(
        (item) => item.value === filters[filter],
      )?.label ?? filterOptions[filter].title
    );
  };

  return (
    <>
      <div className="flex gap-6 px-4 py-8 lg:px-18">
        <button
          type="button"
          onClick={() => handleOpenModal("category")}
          className="flex items-center gap-2 rounded-xl bg-black px-3 py-2 font-medium text-white"
        >
          {getFilterLabel("category")}
          <FiChevronDown className="size-4 text-gray-500" />
        </button>

        <button
          type="button"
          onClick={() => handleOpenModal("price")}
          className="flex items-center gap-2 rounded-xl border px-4 py-2"
        >
          {getFilterLabel("price")}

          <FiChevronDown className="size-4" />
        </button>

        <button
          type="button"
          onClick={() => handleOpenModal("date")}
          className="flex items-center gap-2 rounded-xl border px-4 py-2"
        >
          {getFilterLabel("date")}

          <FiChevronDown className="size-4" />
        </button>
      </div>

      {showModal && currentFilter && (
        <EventFilterModal
          setShowModal={setShowModal}
          modalState={showModal}
          value={filters[activeFilter!]}
          setValue={handleSetValue}
          title={currentFilter.title}
          valuesArray={currentFilter.valuesArray}
        />
      )}
    </>
  );
};

export default Filters;
