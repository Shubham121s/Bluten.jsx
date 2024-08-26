"use client"
import React from 'react';

function Pagination() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <nav aria-label="Pagination" className="flex items-center space-x-2">
        <a href="#" className="p-2 text-custom-teal hover:text-custom-teal-dark focus:outline-none focus:ring-2 focus:ring-custom-teal rounded-full" aria-label="Previous page">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </a>
        <a href="#" className="px-3 py-2 text-sm font-medium text-custom-teal hover:bg-custom-teal hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal">1</a>
        <a href="#" aria-current="page" className="px-3 py-2 text-sm font-medium bg-custom-teal text-white rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal">2</a>
        <a href="#" className="px-3 py-2 text-sm font-medium text-custom-teal hover:bg-custom-teal hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal">3</a>
        <span className="px-3 py-2 text-sm font-medium text-gray-700">...</span>
        <a href="#" className="px-3 py-2 text-sm font-medium text-custom-teal hover:bg-custom-teal hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal">12</a>
        <a href="#" className="p-2 text-custom-teal hover:text-custom-teal-dark focus:outline-none focus:ring-2 focus:ring-custom-teal rounded-full" aria-label="Next page">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </nav>
    </div>
  );
}

export default Pagination;
