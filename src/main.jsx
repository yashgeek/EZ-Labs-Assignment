import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages
import Home from "./pages/Home";
import AboutTeam from "./pages/AboutTeam";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home page
  },
  {
    path: "/about-team",
    element: <AboutTeam />, // About Team page
  },
  {
    path: "/services",
    element: <Services />, // Services page
  },
  {
    path: "/portfolio",
    element: <Portfolio />, // Portfolio (Varnan) page
  },
  {
    path: "/contact",
    element: <Contact />, // Contact page
  },
]);

// Render app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
