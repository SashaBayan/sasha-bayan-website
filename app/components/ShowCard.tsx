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
  startTime: string;
  endTime?: string;
  ticketLink?: string;
  note?: string;
}

const formatTime = (time: string): string => {
  try {
    const parsedTime = parse(time, "HH:mm", new Date());
    return format(parsedTime, "h:mma").toLowerCase();
  } catch {
    return time;
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
  // Parse the date string as a local date without time zone shifting
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  const displayDate = format(parsedDate, "MM.dd.yyyy");

  return (
    <div className="max-w-5xl rounded-md border border-gray-200 bg-[#F9F8F6] p-7 text-dark shadow-sm sm:px-10 sm:py-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Left Section */}
        <div className="flex flex-col gap-3 sm:w-1/2">
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-dark">{displayDate}</p>
            <h2 className="text-2xl font-bold text-dark">{title}</h2>
          </div>

          {ticketLink ? (
            <div className="flex gap-3">
              <Link href={ticketLink || "#"} target="_blank">
                <button className="rounded-full bg-primary px-4 py-3 text-sm hover:bg-gray-300">
                  Get tickets
                </button>
              </Link>
            </div>
          ) : null}
        </div>

        {/* Right Section */}
        <div className="mr-7 flex flex-col gap-3 sm:w-1/2">
          <div>
            <p className="font-semibold">{venue}</p>
            <p>{address}</p>
          </div>
          <p className="font-bold">
            {formatTime(startTime)}
            {endTime ? ` - ${formatTime(endTime)}` : ""}
          </p>
          {note && <p>{note}</p>}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
