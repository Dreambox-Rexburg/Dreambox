"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  { description: "Group of 1-5" },
  { description: "Group of 6+" },
];

const BookingList = () => {
  return (
    <div className="flex mx-auto max-w-sm">
      <Select required>
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
    </div>
  );
};

export default BookingList;
