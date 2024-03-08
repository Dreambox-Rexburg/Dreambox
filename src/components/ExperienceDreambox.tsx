import React from "react";
import Card from "@/components/Card";

const ExperienceDreambox = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <h2 className="text-3xl font-bold mb-4">
        Experience DreamBox Selfie Museum
      </h2>

      <div className="flex flex-col gap-2 md:gap-4">
        <div className="flex flex-col md:grid md:grid-cols-2fr-1fr gap-2">
          <Card
            title="Express yourself"
            content="Unleash your creativity with unique poses and themed settings."
          />
          <Card
            title="Connect with creatives"
            content="Engage with local artists and fellow dreamers."
          />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-1fr-2fr gap-2">
          <Card
            title="Memorable Experiences"
            content="Explore themed rooms and backdrops, spark unforgettable moments of imagination."
          />
          <Card
            title="Create Captivating Content"
            content="Perfect for enhancing social media or curating personal galleries"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceDreambox;
