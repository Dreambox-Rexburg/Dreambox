"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  {
    label: "Image 1",
    imgPath: "/photoCarousel/1.jpeg",
  },
  {
    label: "Image 2",
    imgPath: "/photoCarousel/2.jpeg",
  },
  {
    label: "Image 3",
    imgPath: "/photoCarousel/3.jpeg",
  },
  {
    label: "Image 4",
    imgPath: "/photoCarousel/4.jpeg",
  },
  {
    label: "Image 5",
    imgPath: "/photoCarousel/5.jpeg",
  },
  {
    label: "Image 6",
    imgPath: "/photoCarousel/6.jpeg",
  },
  {
    label: "Image 7",
    imgPath: "/photoCarousel/7.jpeg",
  },
];

const PhotoCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              alt={image.label}
              src={image.imgPath}
              width={500}
              height={500}
              className="rounded-xl"
              priority={index === 0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PhotoCarousel;
