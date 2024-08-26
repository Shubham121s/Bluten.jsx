import React from 'react';

function Navbar() {
  return (
   <div>
    <body>
    <header class="bg-[#F0FAFB] border-b border-[#E5E5E5] py-3 px-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center flex-grow">
                <input type="text" placeholder="Suchen" class="bg-white border border-[#E5E5E5] rounded-full py-1 px-4 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent" />
                <button class="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <nav class="flex items-center space-x-6">
                <a href="#" class="text-[#00C2FF] text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Rezept einlösen
                </a>
                <a href="#" class="text-[#00C2FF] text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Live Bestand
                </a>
                <a href="#" class="text-[#00C2FF] text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Videosprechstunde
                </a>
                <a href="#" class="text-[#00C2FF] text-sm font-medium">FAQs</a>
                <a href="#" class="text-[#00C2FF] text-sm font-medium">Kontakt</a>
                <a href="#" class="text-[#00C2FF] text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="bg-[#00C2FF] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
                </a>
                <a href="#" class="bg-[#FFFF00] text-[#333333] text-sm font-medium py-2 px-4 rounded-full">Anmelden</a>
            </nav>
        </div>
    </header>
</body>
   </div>
  );
}

export default Navbar;
