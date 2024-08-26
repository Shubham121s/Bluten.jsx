"use client";

import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#00857B] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">AGB</a></li>
              <li><a href="#" className="hover:underline">Impressum</a></li>
              <li><a href="#" className="hover:underline">Datenschutz</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                  Rezept einlösen
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Live Bestand
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Videosprechstunde
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-semibold mb-2">Standort</p>
            <p className="text-sm">
              Bergstraße 49 - 57<br />
              69469 Weinheim<br />
              (3 Glocken Quartier)
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-semibold mb-2">Telefon</p>
            <p className="text-sm">0223 545 5250</p>
            <p className="text-sm font-semibold mt-4 mb-2">Öffnungszeiten</p>
            <p className="text-sm">
              Mo-Fr<br />
              09:00 - 18:00 Uhr<br />
              Sa<br />
              09:00 - 14:00 Uhr
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

