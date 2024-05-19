"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";

import BookingDates from "@/components/Booking/BookingDates";
import { combinedMatcher } from "@/components/Booking/lib/matchers";

const BookingCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border mx-auto"
        disabled={combinedMatcher}
        required
      />
      <BookingDates date={date} />
    </div>
  );
};

export default BookingCalendar;
