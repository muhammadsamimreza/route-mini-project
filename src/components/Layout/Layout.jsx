import React, { Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Categories from "../Categories/Categories";
import Container from "../Container";
import Loading from "../Loading/Loading";

const Layout = () => {
  const data = useLoaderData();
  const categories = data.categories;

  const navigation = useNavigation();
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>

      <div className="w-full min-h-[calc(100vh-285px)] grid grid-cols-12 bg-gray-200">
        <aside className="bg-green-200 col-span-2"></aside>

        <main className="col-span-9">
        {navigation?.state === "loading" ? (
          <Loading></Loading>
        ) : (
            <div>
              <div className="flex justify-center">
                <ul className="bg-base-100 shadow-md flex flex-wrap justify-center gap-3 text-xs">
                  {categories.map((tree) => (
                    <Categories key={tree.id} tree={tree}></Categories>
                  ))}
                </ul>
              </div>
              <Outlet></Outlet>
            </div>
          )}
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
