import React from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className="nav space-x-6">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>

            </div>
            <div className="flex items-center gap-4">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className='btn btn-neutral rounded-none'>Login</button>

            </div>

        </div>
    );
};

export default Navbar;