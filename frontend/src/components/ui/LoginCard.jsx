import React from 'react';
import { Link } from 'react-router-dom';
import { PeaceHand } from 'iconoir-react';

const LoginCard = () => {
    return (
        <div className='rounded-2xl bg-gray-100 shadow px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center'>
        <div className='mb-4 space-y-4'>
        <header className="text-center text-xl font-extrabold text-gray-600">Join</header>
        <img src='/TravelMate.svg' alt="Logo" className="block object-cover" width="200" height="500" />
        </div>
        
            <Link className="flex items-baseline rounded-xl bg-[#FE5401] px-4 py-2.5 text-l font-bold text-white hover:bg-[#FF7308]" to='/login'>
                <span>Login</span>
                <PeaceHand/>
            </Link>
            <div className="text-center mt-4">
                <p className="text-gray-600">Don't have an account?</p>
                <Link to="/signup" className="text-[#FE5401]">Sign up</Link>
            </div>
      </div>
           
        
    );
};

export default LoginCard;