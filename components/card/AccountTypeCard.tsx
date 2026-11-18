"use client";
import type { IconType } from "react-icons";
import clsx from "clsx";

type AccountTypeCardProps = {
  accountType: string;
  description: string;
  Icon?: IconType;
  selected?: boolean;
  setSelected?: (selected: boolean) => void;
};
const AccountTypeCard = ({
  accountType,
  description,
  Icon,
  selected,
  setSelected,
}: AccountTypeCardProps) => {
  return (
    <div
      onClick={() => setSelected && setSelected(!selected)}
      className={clsx(
        "bg-white  p-6  border rounded-lg shadow-md w-full flex flex-col items-center gap-3 hover:shadow-lg transition-shadow duration-300 md:max-w-64",
        selected
          ? "border-primary text-primary"
          : "border-gray-300 text-gray-500",
      )}
    >
      <div className="rounded-full size-14 mx-auto text-center ">
        {Icon && <Icon className="size-14" />}
      </div>
      <div
        className={clsx(
          "text-xl font-semibold text-center ",
          selected ? "text-primary" : "text-black",
        )}
      >
        {accountType}
      </div>
      <div
        className={clsx(
          "text-base  text-center mt-2",
          selected ? "text-primary" : "text-gray-600",
        )}
      >
        {description}
      </div>
      <div
        className={clsx(
          "rounded-full size-6 border-gray-300 border mx-auto text-center mt-auto",
          selected ? "bg-primary" : " bg-white border-gray-300",
        )}
      />
    </div>
  );
};

export default AccountTypeCard;
