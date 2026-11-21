import { Suspense } from "react";
import ErrorWrapper from "@/components/ErrorWrapper";

import SuspenseFallback from "@/components/cell/SuspenseFallback";
import EventDetails from "@/components/cell/EventDetails";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div className=" px-4 sm:px-8 lg:px-18">
      <Suspense fallback={<SuspenseFallback />}>
        <ErrorWrapper title="Error Getting this event">
          <EventDetails params={params} />
        </ErrorWrapper>
      </Suspense>
    </div>
  );
};

export default page;
