import React from "react";
import Home from "./screen/Home";
import About from "./screen/About";
import Profile from "./screen/Profile";
import MyProfile from "./screen/MyProfile";
import SingleProfile from "./screen/SingleProfile";
import ErrorPage from "./screen/ErrorPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "me",
        element: <MyProfile />,
      },
      {
        path: ":id",
        element: <SingleProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
