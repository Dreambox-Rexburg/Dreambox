import React from "react";
import BookingCalendar from "@/components/Booking/BookingCalendar";
import BookingList from "@/components/Booking/BookingList";
import BookingDates from "@/components/Booking/BookingDates";

const Page = () => {
  return (
    <div className="px-4">
      <h1 className="text-center text-2xl">Booking</h1>

      <div className="flex flex-col gap-40">
        <div>
          <h2>Select Time and Date</h2>
          <BookingCalendar />
        </div>

        <div>
          <h2>Service Details</h2>

          {/* Dropdown List */}
          <BookingList />

          <ul>
            <li>1 hr</li>
            <li>$10.99</li>
          </ul>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
