"use client";
import React, { useState } from "react";
import { shows } from "./data";
import Link from "next/link";

const ShowsPage = () => {
  const [showPast, setShowPast] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 5;

  const today = new Date();

  // Separate shows into upcoming and past
  const upcomingShows = shows
    .filter((show) => new Date(show.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastShows = shows
    .filter((show) => new Date(show.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Paginate upcoming shows
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentUpcomingShows = upcomingShows.slice(
    indexOfFirstShow,
    indexOfLastShow,
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="h-screen w-screen bg-[#E8E1DD]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold">Upcoming Shows</h1>
        <div className="space-y-6">
          {currentUpcomingShows.length > 0 ? (
            currentUpcomingShows.map((show, index) => (
              <div
                key={index}
                className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-sm text-gray-500">
                  {new Date(show.date).toLocaleDateString()}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{show.title}</h2>
                <p className="mt-2 text-gray-700">{show.description}</p>
                <p className="mt-4 font-medium">Venue: {show.venue}</p>
                <p className="text-gray-600">{show.address}</p>
                <Link
                  href={show.ticketLink}
                  className="mt-4 inline-block text-blue-500 hover:cursor-pointer hover:underline"
                  target="_blank"
                >
                  Get Tickets
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No upcoming shows at this time.
            </p>
          )}
        </div>
        {/* Pagination */}
        {upcomingShows.length > showsPerPage && (
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from(
              { length: Math.ceil(upcomingShows.length / showsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`rounded-lg border px-4 py-2 focus:outline-none ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  }`}
                >
                  {i + 1}
                </button>
              ),
            )}
          </div>
        )}

        {/* Toggle Past Shows */}
        <div className="mt-8 text-center ">
          <button
            onClick={() => setShowPast(!showPast)}
            className="rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-gray-600 focus:outline-none"
          >
            {showPast ? "Hide Past Shows" : "Show Past Shows"}
          </button>
        </div>

        {/* Past Shows */}
        {showPast && (
          <div className="mt-8 bg-[#E8E1DD]">
            <h2 className="mb-4 text-center text-3xl font-bold">Past Shows</h2>
            <div className="space-y-6 ">
              {pastShows.map((show, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-gray-100  p-6 shadow-sm"
                >
                  <p className="text-sm text-gray-500">
                    {new Date(show.date).toLocaleDateString()}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{show.title}</h2>
                  <p className="mt-2 text-gray-700">{show.description}</p>
                  <p className="mt-4 font-medium">Venue: {show.venue}</p>
                  <p className="text-gray-600">{show.address}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowsPage;
