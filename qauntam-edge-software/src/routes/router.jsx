import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
