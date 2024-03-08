import PhotoCarousel from "@/components/PhotoCarousel";
import BookNow from "@/components/BookNow";
import React from "react";
import ExperienceDreambox from "@/components/ExperienceDreambox";
import Hero from "@/app/Hero";

export default function Home() {
  return (
    <div className="mx-8 flex flex-col gap-16">
      <Hero />
      <ExperienceDreambox />
    </div>
  );
}
