"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  { description: "Group of 1-5", price: "15.99" },
  { description: "Group of 6+", price: "10.99" },
];

const BookingList = () => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const selectedService = services.find(
    (service) => service.description === selectedItem,
  );

  return (
    <div className="flex flex-col lg:flex-none lg:h-full gap-4 mx-auto max-w-sm">
      <Select
        required
        value={selectedItem}
        onValueChange={(value) => setSelectedItem(value)}
      >
        <SelectTrigger className="w-full bg-customBackgroundDarker">
          <SelectValue placeholder="Select Group Size" />
        </SelectTrigger>
        <SelectContent className="bg-customBackgroundDark">
          {services.map((service, index) => (
            <SelectItem key={index} value={service.description}>
              {service.description}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="w-full pl-6 lg:mt-auto mb-4">
        <ul className="max-w-xs flex flex-col mx-auto list-disc">
          {/*todo Update time based on event selected - get from... slug? -- [service].page.tsx. Get it from [service] / slug*/}
          {selectedService && <li>{selectedService.price}</li>}
          <li>1 hr</li>
        </ul>
      </div>
    </div>
  );
};

export default BookingList;
