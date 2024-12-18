"use client";
import React from "react";
import Link from "next/link";
import { format, parse } from "date-fns";

interface ShowCardProps {
  date: string;
  title: string;
  description: string;
  venue: string;
  address: string;
  startTime: string; // e.g., "19:30" or "07:30pm"
  endTime?: string; // e.g., "21:00" or "09:00pm"
  ticketLink?: string;
  note?: string;
}

const formatTime = (time: string): string => {
  try {
    const parsedTime = parse(time, "HH:mm", new Date());
    return format(parsedTime, "h:mma").toLowerCase(); // e.g., "7:30 PM"
  } catch {
    return time; // Fallback to raw time if parsing fails
  }
};

const ShowCard: React.FC<ShowCardProps> = ({
  date,
  title,
  description,
  venue,
  address,
  startTime,
  endTime,
  ticketLink,
  note,
}) => {
  return (
    <div className="max-w-5xl rounded-lg border border-gray-200 bg-[#F9F8F6] p-7 text-dark shadow-sm sm:px-10 sm:py-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Left Section: Date, Title, and Buttons */}
        <div className="flex flex-col gap-3 sm:w-1/2">
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-dark">
              {format(new Date(date), "MM.dd.yyyy")}
            </p>
            <h2 className="text-2xl font-bold text-dark">{title}</h2>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link href={ticketLink || "#"} target="_blank">
              <button className="rounded-full bg-primary px-4 py-3 text-sm hover:bg-gray-300">
                Get tickets
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section: Venue, Address, Time, and Description */}
        <div className="mr-7 flex flex-col gap-3 sm:w-1/2">
          <div>
            <p className="font-semibold">{venue}</p>
            <p>{address}</p>
          </div>
          <p className="font-bold">
            {formatTime(startTime)}
            {endTime ? ` - ${formatTime(endTime)}` : ""}
          </p>
          {note ? <p>{note}</p> : null}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
