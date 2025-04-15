// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Story from "./pages/home/sections/Story"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }],
    },

    {
      path: "story",
      element: <Story/>
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
