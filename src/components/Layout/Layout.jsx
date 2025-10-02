import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLoaderData } from "react-router";
import Categories from "../Categories/Categories";
import Container from "../Container";

const Layout = () => {
  const data = useLoaderData();
  const categories = data.categories;

  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
     <Container>
         <div>
        <ul className="grid grid-cols-6 gap-2 justify-items-center">
            {
            categories.map(tree=> <Categories key={tree.id} tree={tree}></Categories>)
        }
        </ul>
      </div>
     </Container>
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
