import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import RightNav from '../Components/RightNav';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-8'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4'>
                <aside className='md:left md:col-span-3 sticky top-8 h-[calc(100vh-32px)] overflow-auto'> <LeftNavbar></LeftNavbar> </aside>
                <section className='col-span-6'>
                    <h1 className='font-semibold text-xl '>Dragon News Home</h1>
                    <div className='my-4'>
                        <Outlet></Outlet>
                    </div>
                </section>
                <aside className='col-span-3 sticky top-8 h-[calc(100vh-32px)] overflow-auto'>
                    <RightNav></RightNav>
                </aside>

            </main>
        </div>
    );
};

export default Root;