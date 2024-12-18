"use client";
import React, { useState } from "react";
import { shows } from "./data";
import ShowCard from "../components/ShowCard";

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
    <div className="flex h-screen w-screen justify-center bg-primary">
      <div className=" px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold">Upcoming Shows</h1>
        <div className="space-y-6">
          {currentUpcomingShows.length > 0 ? (
            currentUpcomingShows.map((show, index) => (
              <ShowCard key={index} {...show} />
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
        <div className="mt-8 text-center">
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
            <div className="space-y-6">
              {pastShows.map((show, index) => (
                <ShowCard key={index} {...show} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowsPage;
