"use client";

import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const services = [
  { description: "Group of 1-5" },
  { description: "Group of 6+" },
];

const BookingList = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <Listbox value={selectedService} onChange={setSelectedService}>
      <ListboxButton>{selectedService.description}</ListboxButton>
      <ListboxOptions anchor="bottom">
        {services.map((service, index) => (
          <ListboxOption
            key={index}
            value={service}
            className="group flex gap-2 bg-white data-[focus]:bg-blue-100"
          >
            <CheckIcon className="invisible size-5 group-data-[selected]:visible" />
            {service.description}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default BookingList;
