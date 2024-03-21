import React from "react";
import BookNow from "@/components/BookNow";
import { ServiceProps } from "@/app/services/page";
import Image from "next/image";

const Service = ({ services }: { services: ServiceProps[] }) => {
  return (
    <div className="p-4 sm:px-16 max-w-screen-xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="grid grid-rows-1 sm:grid-rows-none sm:grid-cols-2 mb-4 border-b-2 border-backgroundDark"
        >
          <div className="m-auto py-4">
            <h1 className="text-2xl font-semibold mb-2 sm:hidden">
              {service.title}
            </h1>
            <Image
              priority={index === 0}
              src={service.img}
              alt={service.title}
              className="rounded-xl"
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-col text-center px-4 pt-2 sm:px-8 sm:pt-4 justify-between">
            <div>
              <h1 className="text-2xl font-semibold mb-2 hidden sm:block">
                {service.title}
              </h1>
              {service.whatWeOffer.map((listItem, index) => (
                <ul key={index} className="list-disc text-left pl-4">
                  <li>{listItem}</li>
                </ul>
              ))}
            </div>
            <div className="flex flex-col justify-end">
              <h1 className="text-2xl font-bold text-right">
                ${service.price}
              </h1>
              <div className="flex justify-end my-2">
                <BookNow slug={service.slug} small />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
