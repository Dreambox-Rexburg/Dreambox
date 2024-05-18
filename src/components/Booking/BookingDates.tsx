import React from "react";
import { dates } from "@/components/Booking/lib/dateUtils";

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
