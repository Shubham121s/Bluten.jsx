"use client"

import React from 'react';

function SmallNav() {
  return (
    <div>
      <script>
        {`tailwind.config = {
          theme: {
            extend: {
              colors: {
                'custom-teal': '#00C2FF',
              },
            },
          },
        }`}
      </script>
      <div className="bg-gray-100 p-4">
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-custom-teal text-sm">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <a href="#" className="hover:underline">Livebestand</a>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Cannabis Blüten</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default SmallNav;
