import React from "react";
import { getDatesBetween } from "@/components/Booking/lib/utils";

interface DateDetails {
  time: string;
  available: boolean;
}

interface Dates {
  [key: string]: DateDetails[];
}

const dateInAdvance: number = 3;

const startDate = new Date();
const endDate = new Date(startDate);
endDate.setMonth(startDate.getMonth() + dateInAdvance);
const generatedDates = getDatesBetween(startDate, endDate);

const dates: Dates = {};

generatedDates.forEach((date) => {
  dates[date] = [
    { time: "5:00 pm", available: true },
    { time: "6:00 pm", available: true },
    { time: "7:00 pm", available: true },
    { time: "8:00 pm", available: true },
    { time: "9:00 pm", available: true },
  ];

  if (date.includes("Fri")) {
    dates[date].push(
      { time: "10:00pm", available: true },
      { time: "11:00pm", available: true },
    );
  }

  if (date.includes("Sat")) {
    dates[date].push({ time: "10:00pm", available: true });
  }
});

const BookingDates = ({ date }: { date: Date | undefined }) => {
  const bookingDateSelected = date?.toDateString();

  return (
    <div>
      <h3>{date?.toDateString()}</h3>

      {bookingDateSelected && dates[bookingDateSelected] && (
        <div>
          {dates[bookingDateSelected].map((date, index) => (
            <button key={index} className={`px-2`} disabled={!date.available}>
              {date.time}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingDates;
