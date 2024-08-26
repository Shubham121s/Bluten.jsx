"use client"
import React from 'react'
import Image from 'next/image';
import Logo from "../../public/kiu.png";

function Blueten() {
  return (
    <div className=" p-4">
      <div>
        {/* Image with Next.js Image component for optimized loading */}
        <Image src={Logo} alt="Logo" width={150} height={150} />

        {/* Main navigation bar */}
        {/* <nav className="max-w-7xl mx-auto bg-white rounded-full shadow-md" aria-label="Main navigation">
          <div className="flex items-center justify-between p-2">
            <div className="flex-grow flex items-center bg-custom-gray rounded-full mr-2">
              <input
                type="text"
                placeholder="Suchen"
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 py-2 px-4 rounded-full w-full"
                aria-label="Search"
              />
              <button type="submit" className="p-2" aria-label="Submit search">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="bg-custom-teal text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-teal">
                Sortieren nach
              </button>
              <button className="bg-custom-teal text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-teal">
                Verfügbarkeit
              </button>
              <button className="bg-custom-teal text-white p-2 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-teal" aria-label="Menu">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav> */}
      </div>
    </div>
  )
}

export default Blueten
