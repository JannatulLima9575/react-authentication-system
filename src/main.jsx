import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/root.jsx";
import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
    { 
      index: true,
      Component: Home, 
    },
    {
      path: "login",
      Component: SignIn,
    },
    {
      path: "register",
      Component: SignUp,
    },
  ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
