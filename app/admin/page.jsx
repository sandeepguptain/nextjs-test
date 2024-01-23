import React from "react";
import CardList from "../(components)/CardList";
import { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={<p className="text-xs text-center p-7">Loading...</p>}>
        <CardList />
      </Suspense>
    </div>
  );
};

export default page;
