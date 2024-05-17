import React from "react";

const dates = [
  { time: "2:00", available: true },
  { time: "3:00", available: false },
  { time: "4:00", available: true },
  { time: "5:00", available: true },
  { time: "5:00", available: true },
  { time: "5:00", available: true },
  { time: "5:00", available: true },
  { time: "5:00", available: true },
  { time: "5:00", available: true },
];

const BookingDates = ({ date }: { date: Date | undefined }) => {
  return (
    <div>
      <h3>{date?.toDateString()}</h3>
      <div className="flex flex-wrap justify-around">
        {dates.map((date, index) => (
          <button key={index} className="px-2">
            {date.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingDates;
