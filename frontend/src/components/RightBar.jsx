import React from 'react';
import LoginCard from './ui/LoginCard';

const RightBar = () => {
    return (
        <div className="max-w-348 h-full min-h-screen top-14 bg-white border-l border-grey px-6 py-6 hidden md:block">
        <LoginCard/>
        </div>
    );
};

export default RightBar;