"use client";

import Projects from './Projects';
import TechnicalSkills from './components/TechnicalSkills';
import { useState } from 'react';
import SideBar from './components/Sidebar';
import ToggleSideBar from './components/ToggleSideBar';



export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);


  return (
    <div className='font-[family-name:var(--font-geist-sans)] flex flex-col'>
      {/* <Header /> */}
      
      <div className='flex md:flex-row flex-col'>
        <div className='relative'>
          <ToggleSideBar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

          <SideBar sidebarOpen={sidebarOpen} />
        </div>

        <main className={`
          p-8 sm:p-20 m-auto justify-items-center
          transition duration-300 ease-in-out
          ${sidebarOpen ? 'md:translate-x-[7rem]' : 'md:translate-x-0'}`}>
          <section className='h-screen text-center md:w-[60vw]'>
            
            <div className='h-[70vh] mt-8 flex justify-around flex-col'>  
              <div className=''>
                <h1 className='m-4 text-2xl font-bold'>Hi, i'm Marcus</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius delectus debitis saepe neque quae non dignissimos enim</p>
              </div>
              
              <TechnicalSkills/>
            </div>
            
            
            <div className="flex items-center my-[0rem]">
              <div className="flex-grow h-px bg-gray-300"></div>
                <a className="mx-4 font-medium cursor-pointer underline hover:scale-110 transition-transform duration-200" href="#projects">Projects</a>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

          </section>

          <div className='md:w-[60vw]' id='projects'>
            <Projects/>
          </div>

          <footer className='flex flex-col justify-center w-full text-center text-[#5e5e5e] my-8'>
            <div>Portfolio made with</div>
            <div>Next.js - Tailwind - Firebase</div>
          </footer>
        </main>
      </div>

    </div>
  );
}
