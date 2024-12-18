"use client";
import React from "react";
import Link from "next/link";

interface ShowCardProps {
  date: string;
  title: string;
  description: string;
  venue: string;
  address: string;
  ticketLink?: string;
  isPast?: boolean;
}

const ShowCard: React.FC<ShowCardProps> = ({
  date,
  title,
  description,
  venue,
  address,
  ticketLink,
  isPast = false,
}) => (
  <div
    className={`rounded-lg border p-6 shadow-sm transition-shadow ${
      isPast ? "bg-gray-100" : "bg-white hover:shadow-md"
    }`}
  >
    <p className="text-sm text-gray-500">
      {new Date(date).toLocaleDateString()}
    </p>
    <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
    <p className="mt-2 text-gray-700">{description}</p>
    <p className="mt-4 font-medium">Venue: {venue}</p>
    <p className="text-gray-600">{address}</p>
    {ticketLink && !isPast && (
      <Link
        href={ticketLink}
        className="mt-4 inline-block text-blue-500 hover:cursor-pointer hover:underline"
        target="_blank"
      >
        Get Tickets
      </Link>
    )}
  </div>
);

export default ShowCard;
