import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLogin = () => {
    return (
        <div className='*:w-full space-y-2'>
            <h2 className='font-semibold mb-3 text-xl' >Login With</h2>
            <Link className='btn text-lg bg-base-100 border-blue-300 text-blue-500'> <FaFacebook className='text-2xl'></FaFacebook> Login With Facebook</Link>
            <Link className='btn text-lg bg-base-100  border-black text-black'> <FaGithub className='text-2xl'></FaGithub> Login With Github</Link>
        </div>
    );
};

export default SocialLogin;