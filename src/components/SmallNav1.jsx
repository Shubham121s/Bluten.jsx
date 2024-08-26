"use client"
import React from 'react'

function SmallNav1() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">GKV mit Kostenübernahme?</h2>
        <div className="relative">
          <button className="w-full bg-white border-2 border-custom-teal text-custom-teal font-medium py-2 px-4 rounded-full text-left focus:outline-none focus:ring-2 focus:ring-custom-teal focus:border-transparent">
            Preisoptionen
          </button>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-custom-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallNav1;
