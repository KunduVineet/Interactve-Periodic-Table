import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Trends from "./components/Trends";
import Lanthanoids from "./components/Lanthanoids";
import App from "./App";
import Quiz from "./components/Quiz";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/lanthanoids" element={<Lanthanoids />} />
      <Route path="/trends" element={<Trends />} />
      <Route path="/quiz" element={<Quiz />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
