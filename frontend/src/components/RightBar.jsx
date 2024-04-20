import React from 'react';
import LoginCard from './ui/LoginCard';
import NewUsersCard from './ui/NewUser';

const RightBar = () => {
    const isAuthenticated = true;
    return (
        <div className="max-w-348 h-full min-h-screen top-14 bg-white border-l border-grey px-6 py-6 hidden md:block">
        { isAuthenticated ? <NewUsersCard/> : <LoginCard/> }
        </div>
    );
};

export default RightBar;