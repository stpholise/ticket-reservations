"use client";

import { useState } from "react";
import clsx from "clsx";
 
import { IoCloseOutline, IoCheckmark } from "react-icons/io5";

const EventFilterModal = ({
  setShowModal,
  modalState,
  value,
  setValue,
  title,
  valuesArray,
}: {
  value: string;
  modalState: boolean;
  setShowModal: (val: boolean) => void;
  setValue: (val: string) => void;
  title: string;
  valuesArray:readonly { label:string, value: string}[];
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(value);
  const handleSubmit = () => {
    setValue(selectedCategory);
    setShowModal(false);
  };

  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 h-screen z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "absolute bottom-0 flex flex-col gap-4 w-full duration-300 max-w-lg rounded-t-2xl bg-white p-6 shadow-xl z-60",
          modalState ? " animate-slide-up" : "animate-slide-out",
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>

          <button onClick={() => setShowModal(false)} type="button" className="cursor-pointer" >
            <IoCloseOutline className="size-6" />
          </button>
        </div>

        <div className="space-y-3 overflow-y-scroll scrollbar-none mask-ellipse  max-h-80">
          {valuesArray.map((category) => (
            <button
              type="button"
              onClick={() => setSelectedCategory(category.value)}
              key={category.value}
              className={clsx(
                "flex  cursor-pointer items-center justify-between border-b-2 border-b-gray-300 py-2 transition hover:bg-gray-50 w-full",
                selectedCategory === category.value
                  ? "text-primary border-b-primary"
                  : "text-gray-600",
              )}
            >
              <span className="font-medium">{category.label}</span>
              <span className="  ">
                {selectedCategory === category.value ? (
                  <IoCheckmark className="sizze-6" />
                ) : (
                  ""
                )}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={"flex-1 rounded-lg border px-4 py-3 font-semibold"}
          >
            Reset
          </button>

          <button
            onClick={handleSubmit}
            type="button"
            className="flex-1 rounded-lg bg-primary px-4 py-3 font-semibold text-white"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventFilterModal;
