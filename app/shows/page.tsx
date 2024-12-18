"use client";
import React, { useState } from "react";
import { shows } from "./data";
import ShowCard from "../components/ShowCard";
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
    <>
      <div className="sticky top-0 z-10 -mb-20 flex w-full justify-between bg-primary px-5 py-5 text-sm text-black">
        <Link href="/">
          <h4
            className={`flex items-center text-sm font-thin uppercase tracking-widest transition-all duration-700`}
          >
            Sasha Bayan
          </h4>
        </Link>
      </div>
      <div className="flex w-full items-center gap-3 bg-primary pl-7 pt-20 sm:pl-20">
        <h1 className="font-glosa-display text-5xl">Shows</h1>
        <h3 className=" text-sm  uppercase">Upcoming</h3>
      </div>
      <div className="flex h-screen w-screen justify-center bg-primary">
        <div className="px-4 py-8">
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
          <div className="my-8 text-right">
            <button
              onClick={() => setShowPast(!showPast)}
              className="text-sm  uppercase hover:cursor-pointer hover:underline"
            >
              {showPast ? "Hide Past Shows" : "Past Shows"}
            </button>
          </div>

          {/* Past Shows */}
          {showPast && (
            <div className="mt-8 bg-[#E8E1DD]">
              <div className="space-y-6">
                {pastShows.map((show, index) => (
                  <ShowCard key={index} {...show} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowsPage;
