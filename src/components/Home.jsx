import React from 'react';
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Welcome to the Home Page
            </h1>

            {/* Login Section */}
            <div className="flex items-center gap-2">
                <p className="text-black">
                    Go to Login Page
                </p>
                <NavLink
                    className="underline font-semibold text-black hover:text-gray-500"
                    to="/login"
                >
                    Login
                </NavLink>
            </div>

            {/* Register Section */}
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
        </div>
    );
};

export default Home;