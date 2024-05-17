import React from "react";
import { getDatesBetween } from "@/components/Booking/lib/utils";

interface DateDetails {
  time: string;
  available: boolean;
}

interface Dates {
  [key: string]: DateDetails[];
}

// TODO: Fix dates ._.
let startDate = new Date(2024, 4, 17); // May 5, 2024
let endDate = new Date(2024, 5, 17); // May 10, 2024
let generatedDates = getDatesBetween(startDate, endDate);

let dates: Dates = {};

generatedDates.forEach((date) => {
  dates[date] = [
    { time: "5:00 pm", available: true },
    { time: "6:00 pm", available: false },
  ];
});

console.log("generatedDates", generatedDates);

console.log("dates", dates);

const BookingDates = ({ date }: { date: Date | undefined }) => {
  const bookingDateSelected = date?.toDateString();

  return (
    <div>
      <h3>{date?.toDateString()}</h3>

      {bookingDateSelected && dates[bookingDateSelected] && (
        <div>
          {dates[bookingDateSelected].map((date, index) => (
            <button key={index} className={`px-2`} disabled={!date.available}>
              {date.time} {date.available} {index}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingDates;
