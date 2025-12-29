import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import MyProfile from "./MyProfile";
import { auth } from "../firebase/firebase";

const Home = () => {
  const [logined, setLogined] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLogined(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Welcome to the Home Page
      </h1>

      {logined ? (
        <MyProfile />
      ) : (
        <>
          <div className="flex items-center gap-2">
            <p className="text-black">Go to Login Page</p>
            <NavLink
              className="underline font-semibold text-black hover:text-gray-500"
              to="/login"
            >
              Login
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-black">
              If you are not registered, go to Register Page
            </p>
            <NavLink
              className="underline font-semibold text-black hover:text-gray-500"
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
