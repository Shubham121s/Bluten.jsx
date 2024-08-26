"use client";

import React from 'react';

function Main() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-4 border-b border-[#00C2FF]">
              <span className="text-red-500 text-sm">• nicht lieferbar</span>
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Cannabis Flos 18/1 PT Mango"
                className="w-full h-40 object-contain mt-2"
              />
            </div>
            <div className="p-4 bg-[#E6F9F8]">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-[#00857B]">Canify</h2>
                <div className="flex space-x-2">
                  <span className="bg-white text-[#00857B] px-2 py-1 rounded-full text-xs font-medium">
                    THC 18%
                  </span>
                  <span className="bg-[#00C2FF] text-white px-2 py-1 rounded-full text-xs font-medium">
                    CBD &lt;1%
                  </span>
                  <button className="text-[#00857B]" aria-label="Mehr Informationen">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Cannabis Flos 18/1 PT Mango
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                <span className="text-gray-600">Kultivar</span>
                <span className="text-right">Mango</span>
                <span className="text-gray-600">Genetik</span>
                <span className="text-right">Hybrid</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-[#00857B]">€ 11,66</span>
                  <span className="text-xs text-gray-600">pro Gramm</span>
                </div>
                <button className="bg-[#FFFF00] text-[#00857B] px-3 py-1 rounded-full text-sm font-medium">
                  In den Warenkorb
                </button>
              </div>
            </div>
          </div>

          {/* Additional product cards... */}
        </div>
      </div>
    </div>
  );
}

export default Main;
