import Link from "next/link";
import React from "react";

export const BottomHeader = () => {
  return (
    <div className="bg-cyan-800 p-6">
      <div className="flex items-center justify-center flex-col gap-4 p-4">
        <h4 className="text-2xl font-light lg:text-3xl text-white">
          Trust RJO for all of your futures trading brokerage, technology, and
          infrastructure needs.
        </h4>
        <Link
          href="/contact"
          className="rounded-full p-4 bg-green-500 text-lg text-white"
        >
          Contact Us Now
        </Link>
      </div>
    </div>
  );
};
