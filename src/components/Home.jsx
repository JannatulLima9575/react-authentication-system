import React from 'react';
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <NavLink to="/login">Go to Login Page</NavLink>
        </div>
    );
};

export default Home;