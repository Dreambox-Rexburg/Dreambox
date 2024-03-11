import React from "react";
import ExperienceDreambox from "@/components/ExperienceDreambox";
import Hero from "@/components/Hero";
import DiscoverDreambox from "@/components/DiscoverDreambox";

export default function Home() {
  return (
    <div className="px-8 flex flex-col gap-16 max-w-screen-xl mx-auto">
      <Hero />
      <ExperienceDreambox />
      <DiscoverDreambox />
    </div>
  );
}
