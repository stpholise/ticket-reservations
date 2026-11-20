import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const PryButton = ({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        clsx(
          " cursor-pointer w-full max-w-120 bg-primary font-medium text-base text-white py-3 px-4 rounded-md mx-auto my-8 block h-12",
          className,
        ),
      )}
    >
      {" "}
      {text}
    </button>
  );
};

export default PryButton;
