import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { campusIcon, admin } from '../assets/assets';

const Navbar = ({ setSidebar }) => {

    return (

        <div className='w-full bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-50'>

            {/* LEFT SECTION */}
            <div className='flex items-center gap-4'>

                {/* MENU BUTTON FOR MOBILE */}
                <button
                    onClick={() => setSidebar(prev => !prev)}
                    className='lg:hidden'
                >
                    <Menu className='w-6 h-6 text-gray-700' />
                </button>

                {/* LOGO + TITLE */}
                <div className='flex items-center gap-3'>

                    <div className='w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg'>
                      <img src={campusIcon} alt='Campus Icon' />
                        
                    </div>

                    <div className='hidden sm:block'>
                        <h1 className='text-[16px] font-semibold text-gray-800'>
                            CampusFlow 
                        </h1>

                        <p className='text-xs text-gray-500'>
                            Smart campus broadcasting system
                        </p>
                    </div>

                </div>

            </div>

            {/* CENTER LINKS */}
            <div className='hidden lg:flex items-center gap-8 text-sm font-medium text-gray-500'>

                <p className='cursor-pointer hover:text-indigo-600 hover:scale-110 transition-all'>
                    Overview
                </p>

                <p className='cursor-pointer hover:text-indigo-600 hover:scale-110 transition-all'>
                    Workflows
                </p>

                <p className='cursor-pointer hover:text-indigo-600 hover:scale-110 transition-all'>
                    Docs
                </p>

            </div>

            {/* RIGHT SECTION */}
            <div className='flex items-center gap-3'>

                {/* SEARCH BAR */}
                <div className='hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-[260px]'>

                    <Search className='w-4 h-4 text-gray-400' />

                    <input
                        type='text'
                        placeholder='Search content, teachers, subjects'
                        className='bg-transparent outline-none border-none text-sm ml-2 w-full placeholder:text-gray-400'
                    />

                </div>

                {/* NOTIFICATION */}
                <button className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all'>

                    <Bell className='w-5 h-5 text-gray-600' />

                </button>

                {/* PROFILE */}
                <div className='flex items-center gap-3 ml-2 cursor-pointer'>

                    <img
                        src={admin}
                        alt='profile'
                        className='w-10 h-10 rounded-full object-cover'
                    />

                    <div className='hidden md:block leading-tight'>

                        <h2 className='text-sm font-semibold text-gray-800'>
                            Himanshu Verma
                        </h2>

                        <p className='text-xs text-gray-500'>
                            Admin
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Navbar;