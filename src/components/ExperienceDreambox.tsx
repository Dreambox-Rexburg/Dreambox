import React from "react";
import Card from "@/components/Card";

const cardData = [
  {
    title: "Express yourself",
    content: "Unleash your creativity with unique poses and themed settings.",
  },
  {
    title: "Connect with creatives",
    content: "Engage with local artists and fellow dreamers.",
  },
  {
    title: "Memorable Experiences",
    content:
      "Explore themed rooms and backdrops, spark unforgettable moments of imagination.",
  },
  {
    title: "Create Captivating Content",
    content:
      "Perfect for enhancing social media or curating personal galleries",
  },
];

const ExperienceDreambox = () => {
  return (
    <div className="m-auto">
      <h2 className="text-3xl font-bold mb-4">
        Experience DreamBox Selfie Museum
      </h2>

      <div className="flex flex-col gap-2 md:gap-4">
        <div className="flex flex-col md:grid md:grid-cols-2fr-1fr gap-2">
          {cardData.slice(2).map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
        <div className="flex flex-col md:grid md:grid-cols-1fr-2fr gap-2">
          {cardData.slice(2, 4).map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDreambox;
