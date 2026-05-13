import React from 'react';
import {LayoutDashboard,Upload,FileText,Radio,BarChart3,Settings,X} from 'lucide-react';
import { campusIcon } from '../assets/assets';

const Sidebar = ({ sidebar, setSidebar }) => {

  return (
    <>
      {/* MOBILE OVERLAY */}
      {
        sidebar &&
        <div
          onClick={() => setSidebar(false)}
          className='fixed inset-0 bg-black/40 z-40 lg:hidden'
        ></div>
      }
      {/* SIDEBAR */}
      <div className={`fixed top-[80px] left-0 h-[calc(100vh-80px)] w-[270px] bg-white border-r border-gray-200 text-gray-700 z-40 transform transition-all duration-300
      ${sidebar ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0`}>

        {/* TOP */}
        <div className='flex items-center justify-between px-6 py-5 border-b border-gray-600'>

          {/* LOGO */}
          <div className='flex items-center gap-3'>

            <div className='w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center font-bold text-lg'>
              <img src={campusIcon} alt='Campus Icon' />
            </div>

            <div>

              <h1 className='text-[17px] font-semibold'>
                CampusFlow
              </h1>

              <p className='text-xs text-gray-400'>
               Smart campus broadcasting system
              </p>

            </div>

          </div>

          {/* CLOSE BTN */}
          <button
            onClick={() => setSidebar(false)}
            className='lg:hidden'
          >
            <X className='w-6 h-6 text-gray-300' />
          </button>

        </div>

        {/* NAV LINKS */}
        <div className='flex flex-col gap-2 p-4 text-sm font-medium'>

          {/* DASHBOARD */}
          <button className='flex items-center gap-3 bg-indigo-700 text-white px-4 py-3 rounded-md'>

            <LayoutDashboard className='w-5 h-5' />

            <p>Dashboard</p>

          </button>

          {/* UPLOAD CONTENT */}
          <button className='flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm hover:scale-110 hover:bg-gray-700 hover:text-white transition-all'>
            <Upload className='w-5 h-5' />
            <p>Upload Content</p>
          </button>

          {/* MY CONTENT */}
          <button className='flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm hover:scale-110 hover:bg-gray-700 hover:text-white transition-all'>
            <FileText className='w-5 h-5' />
            <p>My Content</p>
          </button>

          {/* BROADCASTS */}
          <button className='flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm hover:scale-110 hover:bg-gray-700 hover:text-white transition-all'>
            <Radio className='w-5 h-5' />
            <p>Broadcasts</p>
          </button>

          {/* ANALYTICS */}
          <button className='flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm hover:scale-110 hover:bg-gray-700 hover:text-white transition-all'>
            <BarChart3 className='w-5 h-5' />
            <p>Analytics</p>
          </button>

          {/* SETTINGS */}
          <button className='flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm hover:scale-110 hover:bg-gray-700 hover:text-white transition-all'>
            <Settings className='w-5 h-5' />
            <p>Settings</p>
          </button>

        </div>

      </div>

    </>

  );

};

export default Sidebar;