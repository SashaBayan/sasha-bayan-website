"use client";
import React from "react";
import Link from "next/link";
import { format } from "date-fns";

interface ShowCardProps {
  date: string;
  title: string;
  description: string;
  venue: string;
  address: string;
  ticketLink?: string;
}

const ShowCard: React.FC<ShowCardProps> = ({
  date,
  title,
  description,
  venue,
  address,
  ticketLink,
}) => (
  <div className="rounded-lg border border-gray-200 bg-[#F9F8F6] px-6 py-4 shadow-sm">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      {/* Left Section: Date, Title, and Buttons */}
      <div className="flex flex-col gap-2 sm:w-1/2">
        <p className="text-sm font-semibold text-gray-600">
          {format(new Date(date), "MM.dd.yyyy")}
        </p>
        <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <Link
            href={ticketLink || "#"}
            target="_blank"
            className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            Get tickets
          </Link>
          <button
            onClick={() => alert("Add to calendar clicked!")}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Add to calendar
          </button>
        </div>
      </div>

      {/* Right Section: Venue, Address, Time, and Description */}
      <div className="flex flex-col gap-1 sm:w-1/2">
        <p className="font-semibold text-gray-800">{venue}</p>
        <p className="text-gray-600">{address}</p>
        <p className="font-bold text-gray-800">7pm - 8pm</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);

export default ShowCard;
