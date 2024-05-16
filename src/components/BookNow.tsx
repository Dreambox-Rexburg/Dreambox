import React from "react";
import Link from "next/link";

const BookNow = ({ slug, small }: { slug?: string; small?: boolean }) => {
  return (
    <button
      className={`${small && "text-sm"} py-1.5 px-2 font-bold rounded-3xl border-2 bg-customPrimaryDefault text-white hover:border-customPrimaryDark`}
    >
      {slug ? <Link href={`services/${slug}`}>Book Now!</Link> : "Book Now!"}
    </button>
  );
};

export default BookNow;
