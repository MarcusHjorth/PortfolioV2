import Image from 'next/image';

interface SideBarProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const ToggleSideBar = ({ sidebarOpen, setSidebarOpen }: SideBarProps) => {
    return ( 
          <div 
              onClick={() => setSidebarOpen(prev => !prev)}
              className={`
              bg-secondary md:fixed hidden top-4 size-[2.5rem] md:flex justify-center items-center rounded-sm cursor-pointer z-50 
              transition-all duration-300
              ${sidebarOpen ? 'left-[15rem]' : 'left-[1rem]'}
          `}>
            <Image
              className={`transition-transform duration-300 ${sidebarOpen ? '' : 'rotate-180'}`}
              src={"./arrow.svg"}
              alt="Project Image"

              width={48}
              height={48}
              priority
            />
          </div>
     );
}
 
export default ToggleSideBar;