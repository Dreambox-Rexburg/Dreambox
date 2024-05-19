import React from "react";
import BookingCalendar from "@/components/Booking/BookingCalendar";
import BookingList from "@/components/Booking/BookingList";
import Button from "@/components/Button";

const Page = () => {
  return (
    <div className="px-4">
      <h1 className="text-center text-2xl font-bold">Booking</h1>

      <div className="flex flex-col gap-8 max-w-md mx-auto">
        <div>
          <h2 className="text-xl font-semibold py-4">Select Time and Date</h2>
          <BookingCalendar />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold py-4">Service Details</h2>

          {/* Dropdown List */}
          <div className="w-full">
            <BookingList />
          </div>

          {/*todo: redirect to checkout :D*/}
          <Button className="mx-auto w-full max-w-sm">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
