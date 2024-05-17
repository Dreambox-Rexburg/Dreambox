"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";

import type { Matcher } from "react-day-picker";
import BookingDates from "@/components/Booking/BookingDates";

const BookingCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const combinedMatcher: Matcher = (day: Date) => {
    const isSunday = day.getDay() === 0;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const isBeforeYesterday = day < yesterday;
    // todo: furthest is 3 months in advance? - Variable

    return isSunday || isBeforeYesterday;
  };

  console.log(date?.toDateString());

  return (
    <div className="flex flex-col md:flex-row">
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
