"use client";

import { useState } from "react";
import { eventCategories, EventCategory } from "@/data";

const EventFilterModal = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<EventCategory>("all");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Filter Events</h2>

          <button type="button">✕</button>
        </div>

        <div className="space-y-3">
          {eventCategories.map((category) => (
            <label
              key={category.value}
              className="flex cursor-pointer items-center justify-between rounded-xl border p-4 transition hover:bg-gray-50"
            >
              <span className="font-medium">{category.label}</span>

              <input
                type="radio"
                name="eventCategory"
                value={category.value}
                checked={selectedCategory === category.value}
                onChange={() => setSelectedCategory(category.value)}
                className="h-4 w-4 accent-purple-600"
              />
            </label>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className="flex-1 rounded-xl border px-4 py-3 font-semibold"
          >
            Reset
          </button>

          <button
            type="button"
            className="flex-1 rounded-xl bg-purple-600 px-4 py-3 font-semibold text-white"
          >
            Apply Filters
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventFilterModal;