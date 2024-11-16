import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-6 gap-2 p-2'>
            <div className="logo ">
                <img src={logo} alt="" />
            </div>
            <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
            <p>
                {moment().format("dddd, MMMM Do YYYY")}
            </p>
        </div>
    );
};

export default Header;