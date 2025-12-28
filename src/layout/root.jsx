import React from 'react';
import Home from '../components/Home';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Root;