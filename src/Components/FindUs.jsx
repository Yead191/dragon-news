import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='my-8'>
            <h2 className='font-semibold mb-3 text-xl' >Find Us On</h2>
            <div className="join flex  join-vertical *:bg-base-100 *:justify-start ">
                <button className="btn join-item gap-3 text-lg text-gray-600 py-3 "><FaFacebook className='text-2xl' ></FaFacebook> Facebook</button>
                <button className="btn join-item gap-3 text-lg text-gray-600 py-3 "><FaInstagram className='text-2xl' /> Instagram</button>
                <button className="btn join-item gap-3 text-lg text-gray-600 py-3 "><FaTwitter className='text-2xl' ></FaTwitter> Twitter</button>
            </div>

        </div>
    );
};

export default FindUs;