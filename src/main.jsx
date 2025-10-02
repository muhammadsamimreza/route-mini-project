import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import SameCategory from "./components/SameCategory/SameCategory";
import Loading from "./components/Loading/Loading";
import Home from './pages/Home'
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    hydrateFallbackElement: <Loading></Loading>,
    loader: (()=> fetch('https://openapi.programming-hero.com/api/categories')),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        loader: (({params})=> fetch(`https://openapi.programming-hero.com/api/category/${params.id}`)
        ),
        Component: SameCategory,
      },
      {
        path: "/home",
        element: <Loading></Loading>,
      },
      // {
      //   path: "/about",
      //   element: <About></About>,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact></Contact>,
      // },
     
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
