import PhotoCarousel from "@/components/PhotoCarousel";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-1fr-2fr md:grid-rows-none md:grid-cols-1fr-2fr">
        <div className="font-bold text-center w-3/4 flex flex-col items-center m-auto ">
          <p>Unlock your creativity. Capture your story.</p>
          <p className="text-2xl">Welcome to DreamBox.</p>
        </div>
        <div className="flex m-auto px-4">
          <PhotoCarousel />
        </div>
      </div>
    </>
  );
}
