import React from "react";
import BookingCalendar from "@/components/Booking/BookingCalendar";
import BookingList from "@/components/Booking/BookingList";
import Button from "@/components/Button";

const Page = () => {
  return (
    <div className="px-4">
      <h1 className="text-center text-2xl font-bold">Booking</h1>

      <div className="flex flex-col lg:flex-none lg:grid lg:grid-cols-2fr-1fr gap-8 mx-auto max-w-md md:max-w-screen-md lg:max-w-screen-lg">
        <div className="flex flex-col w-full mx-auto">
          <h2 className="text-xl font-semibold py-4">Select Time and Date</h2>
          <BookingCalendar />
        </div>

        <div className="flex flex-col gap-4 lg:gap-0">
          <h2 className="text-xl font-semibold py-4">Service Details</h2>

          {/* Dropdown List */}
          <div className="w-full lg:h-full">
            <BookingList />
          </div>

          {/*todo: redirect to checkout :D*/}
          <Button className="mx-auto w-full max-w-sm lg:mt-auto">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
