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
  startTime: string;
  endTime?: string;
  ticketLink?: string;
}

const ShowCard: React.FC<ShowCardProps> = ({
  date,
  title,
  description,
  venue,
  address,
  startTime,
  endTime,
  ticketLink,
}) => {
  //   const calendarFileUrl = generateCalendarFile({
  //     date,
  //     startTime,
  //     endTime,
  //     title,
  //     description,
  //     location: `${venue}, ${address}`,
  //   });

  return (
    <div className="max-w-5xl rounded-lg border border-gray-200 bg-[#F9F8F6] px-10 py-7 pr-24 text-dark shadow-sm">
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
            {/* <Link
              href={calendarFileUrl}
              download={`${title.replace(/ /g, "_")}.ics`}
              className="rounded-full border border-primary px-4 py-3 text-center text-sm hover:bg-gray-100"
            >
              Add to calendar
            </Link> */}
          </div>
        </div>

        {/* Right Section: Venue, Address, Time, and Description */}
        <div className="flex flex-col gap-3 sm:w-1/2">
          <div>
            <p className="font-semibold">{venue}</p>
            <p>{address}</p>
          </div>
          <p className="font-bold">
            {startTime}
            {endTime ? ` - ${endTime}` : ""}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
