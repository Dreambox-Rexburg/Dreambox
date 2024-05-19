import React from "react";
import { dates } from "@/components/Booking/lib/dateUtils";
import Button from "@/components/Button";

const BookingDates = ({ date }: { date: Date | undefined }) => {
  const bookingDateSelected = date?.toDateString();

  return (
    <div>
      <h2 className="text-xl font-semibold py-4 lg:pt-0 lg:pb-4">
        {date?.toDateString()}
      </h2>

      {bookingDateSelected && dates[bookingDateSelected] && (
        <div className="grid grid-cols-3 max-w-sm mx-auto">
          {dates[bookingDateSelected].map((date, index) => (
            <Button key={index} disabled={!date.available}>
              {date.time}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingDates;
