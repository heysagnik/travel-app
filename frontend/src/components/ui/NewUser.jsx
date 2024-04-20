import React from 'react';
import { Link } from 'react-router-dom';
import {UserPlus} from 'iconoir-react'

const UserCard = ({ userName }) => {
    return (
        <div className='flex flex-row  mb-2'>
            <img src='https://randomuser.me/api/portraits/women/65.jpg' className='w-8 h-8 rounded-full'/>
            <div className='ml-4 text-xs'>
                <p className='font-bold '>John Doe</p>
                <p className='text-gray-500'>{userName}</p>
            </div>
            <Link to='/profile' className='text-orange-500 ml-6 text-sm' >
                <UserPlus/>
            </Link>
        </div>
    );
}

const NewUsersCard = () => {
    return (
        <div className='rounded-2xl bg-gray-100 shadow px-6 pt-6 pb-6 mb-4 flex flex-col '>
        <div className='mb-4 space-y-4'>
        <header className="text-center text-lg  text-gray-600">Make <i>new</i> mates</header>
        </div>
        <div className='flex flex-col items-center'>
          <UserCard userName={"@heysagnik"}/>
          <UserCard userName={"@heysagnik"}/>
          <UserCard userName={"@heysagnik"}/>
          <UserCard userName={"@heysagnik"}/>
          <UserCard userName={"@heysagnik"}/>
        </div>
      </div>
           
        
    );
};

export default NewUsersCard;