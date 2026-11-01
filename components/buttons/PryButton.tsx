import React from "react";

const PryButton = ({ text }: { text: string }) => {
  return (
    <button className=" w-full max-w-120 bg-primary font-medium text-base text-white py-3 px-4 rounded-md mx-auto my-8 block">
      {" "}
      {text}
    </button>
  );
};

export default PryButton;
