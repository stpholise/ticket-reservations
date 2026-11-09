import React from "react";

const PryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className=" cursor-pointer w-full max-w-120 bg-primary font-medium text-base text-white py-3 px-4 rounded-md mx-auto my-8 block"
    >
      {" "}
      {text}
    </button>
  );
};

export default PryButton;
