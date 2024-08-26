import React from "react";
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import SmallNav from "@/components/SmallNav";
import SmallNav1 from "@/components/SmallNav1";
import Pagination from "@/components/Pagination";
export default function Home() {
  return (
    <main >
     <Navbar/>
     <SmallNav/>
     <SmallNav1/>
     <Aside/>
     <Main/>
     <Pagination/>

      

    <Footer/>
    </main>
  );
}
