import React from "react";
import Card from "@/components/Card";

const DiscoverDreambox = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">
        Discover your DreamBox experience
      </h2>
      <div className="flex flex-col gap-8 md:flex-row w-3/4 md:w-full mx-auto items-center justify-center">
        <Card title="Birthday Events" square={true} />
        <Card title="General Admissions" square={true} />
        <Card title="Private Events" square={true} />
      </div>
    </div>
  );
};

export default DiscoverDreambox;
