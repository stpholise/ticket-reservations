"use client";

import { catchError, ErrorInfo } from "next/error";
import PryButton from "./buttons/PryButton";

const ErrorFallback = (
  props: { title: string },
  { error, retry }: ErrorInfo,
) => {
  const message =
    error instanceof Error ? error.message : "Internal server Error";
  return (
    <div className=" w-full max-w-4xl flex items-center justify-center gap-4 flex-col text-gray-500">
      <h2 className="text-2xl text-gray-500 font-semibold">{props.title}</h2>
      <p className="text-sm">{message} this may be due to network </p>
      <PryButton onClick={() => retry()} text={"Try again"} />
    </div>
  );
};

const ErrorWrapper = catchError(ErrorFallback);

export default ErrorWrapper;
