interface SideBarProps {

    sidebarOpen: boolean;
  
  }
  
  
  
function SideBar({ sidebarOpen }: SideBarProps) {
    
    return ( 
        <aside 
            className={`
                md:block fixed hidden transition duration-300 top-0 left-0 h-full w-56 bg-secondary
                ${sidebarOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}
            `}
            >
        
            <ul className='fixed flex flex-col justify-center p-4 mt-8 gap-4 '> 
                {/* <li className='cursor-pointer'>Contact me</li> */}
                <li className="rounded-2xl p-4 px-8 cursor-pointer underline hover:scale-110 transition-transform duration-200">
                    <a href="#">About me</a>
                </li>
                <li className="rounded-2xl p-4 px-8 cursor-pointer underline hover:scale-110 transition-transform duration-200">
                    <a href="#skills">Technical skills</a>
                </li>
                <li className="rounded-2xl p-4 px-8 cursor-pointer underline hover:scale-110 transition-transform duration-200">
                    <a href="#projects">Projects</a>
                </li>
            </ul>
      </aside>
     );
}
 
export default SideBar;