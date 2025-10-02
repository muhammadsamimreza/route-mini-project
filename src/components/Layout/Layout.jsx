import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="w-full min-h-[calc(100vh-285px)] grid grid-cols-12 bg-gray-200">
        <aside className="bg-green-200 col-span-3"></aside>
        <main className="bg-teal-200 col-span-8">
            <Outlet></Outlet>
        </main>
        <aside className="bg-red-200 col-span-1"></aside>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
