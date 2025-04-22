"use client"
import Image from 'next/image';

import { useState, useEffect } from "react";


const Header = () => {

    const [time, setTime] = useState(""); // Start empty to avoid SSR issues

    useEffect(() => {
        const updateTime = () => {
        setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        };

        updateTime(); // Set initial time after component mounts
        const interval = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);


    return ( 
        <header>
            <ul className='flex flex-row items-center p-4 justify-end gap-4'> 
                
                <li className='cursor-pointer'>Contact me</li>
                <li className="bg-gradient-to-tr from-[#212121] to-[#4a4a4a] rounded-2xl p-4 px-8 font-bold">
                    {time}
                </li>
            </ul>

        </header>
     );
}
 
export default Header;