import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-2'>
            <p className='bg-[#D72050] text-white px-4 py-2'>Latest</p>

            <Marquee pauseOnHover={true} speed={50} className=''>
                <Link className='mr-4' to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>

                <Link className='mr-4' to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>

                <Link className='mr-4' to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link className='mr-4' to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link className='mr-4' to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;