import PhotoCarousel from "@/components/PhotoCarousel";
import BookNow from "@/components/BookNow";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-1fr-2fr md:grid-rows-none md:grid-cols-1fr-2fr">
        <div className="text-center w-3/4 flex flex-col items-center m-auto ">
          <p className="font-bold">
            Unlock your creativity. Capture your story.
          </p>
          <p className="font-bold text-2xl">Welcome to DreamBox.</p>
          <BookNow />
        </div>
        <div className="flex m-auto px-4">
          <PhotoCarousel />
        </div>
      </div>
    </>
  );
}
