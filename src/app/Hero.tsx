import React from "react";
import BookNow from "@/components/BookNow";
import PhotoCarousel from "@/components/PhotoCarousel";

const Hero = () => {
    return (
        <div className="grid grid-rows-1fr-2fr md:grid-rows-none md:grid-cols-2 max-w-screen-xl mx-auto">
            <div className="text-center w-3/4 flex flex-col items-center m-auto gap-4">
                <p className="font-semibold">
                    Unlock your creativity. Capture your story.
                </p>
                <h1 className="font-bold text-4xl">Welcome to DreamBox</h1>
                <BookNow/>
            </div>
            <PhotoCarousel/>
        </div>
    );
};

export default Hero;
