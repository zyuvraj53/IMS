"use client";

import React from 'react';
import { Menu, Bell, Search, Sun, Moon, Settings } from 'lucide-react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed, setIsDarkMode } from '@/state';
import DarkModeToggle from '@/app/(functionalities)/DarkModeToggle';

const Navbar = () => {

  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector(
    (state) => state.global.isDarkMode
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  }

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  }

  return (
    <div className='flex justify-between items-center w-full mb-7'>
      {/* Left Side */}
      <div className='flex justify-between items-center gap-5'>
        <button title="Menu" className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
          <Menu className='w-4 h-4' />
        </button>
        <div className='relative'>
          <input type="search"
            placeholder='Search Groups & Products'
            className='pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focuts:outline-none focus:border-blue-500'
          />

          <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
            <Search className='text-gray-500' size={20} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
          <div>
            {/* <button title="Toggle" onClick={toggleDarkMode}>
              {
                isDarkMode ?
                  <Moon className='cursor-pointer text-gray-500' size={24} />
                :
                  <Sun className='cursor-pointer text-gray-500' size={24} />
              }
            </button> */}
            <DarkModeToggle/>
          </div>
          <div className='relative'>
            <Bell className='cursor-pointer text-gray-500 size-500' />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>

          <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3' />
          <div className='flex items-center gap-3 cursor-pointer'>
            Image
            <span className='font-semibold'> Yuvraj Singh </span>
          </div>
        </div>
        <Link href='/settings'>
          <Settings className='cursor-pointer text-gray-500' size={24} />
        </Link>

      </div>
    </div>
  )
}

export default Navbar;