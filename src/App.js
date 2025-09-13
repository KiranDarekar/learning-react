import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Header from "./components/Header";
import RestroContainer from "./components/RestroContainer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet /> {/* Will render child routes here */}
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestroContainer />
      },{
        path: "about",
        element: <AboutUs />
      },{
        path: "contact",
        element: <Contact />
      }, {
        path: "/restaurants/:resId",
        element : <RestaurantMenu />
      }

    ]
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} ></RouterProvider>);
