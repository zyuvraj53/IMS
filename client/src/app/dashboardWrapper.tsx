"use client";

import React, { useEffect } from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from '@/app/(components)/Sidebar';
import StoreProvider, {useAppSelector} from './redux';

// To connect a Next.js app to redux, there is a very specific way to do it.

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector(
    (state) => state.global.isDarkMode
  );

  // If I do not do the following, the I will have to use "use client";

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  })

  return (
    <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar/>
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
        <Navbar/>
        {children}
      </main>
    </div>
  )
};


// In next.js, we have the redux store provider, and it wraps the layout, which is in turn wrapped inside the body
// Now, even if we have different pages, we still have our redux store provided for us.
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
};

export default DashboardWrapper;