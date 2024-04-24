import React from 'react';
import { AvatarGenerator } from "random-avatar-generator";

const Navbar = () => {
    const generator = new AvatarGenerator();
    return (
        <nav className=" lg:ml-44 lg:mr-[215px] border-b border-r">
            <ul className="flex justify-between items-center p-4">
                <li className=""><img src='/TravelMate.svg' className='h-5'/></li>
                
                <li className="">
                <button className="rounded-full">
                <img src={generator.generateRandomAvatar()} className='h-8'/>
                </button>

                </li>
            </ul>
        </nav>
    );
};

export default Navbar;