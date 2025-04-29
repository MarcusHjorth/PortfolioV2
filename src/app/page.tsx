import Projects from './Projects';
import Header from './Header';
import TechnicalSkills from './TechnicalSkills';


export default function Home() {

  interface ProjectsProps {

    id?: string;
  
  }

  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
    <Header />
    <main className="p-8 sm:p-20 m-auto justify-items-center min-h-screen">

      <section className='h-screen text-center md:w-[60vw]'>
        <div className='h-[60vh] mt-8 flex justify-between flex-col'>
          <div className=''>
            <h1 className='m-4 text-2xl font-bold'>Hi, i'm Marcus</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius delectus debitis saepe neque quae non dignissimos enim</p>
          </div>
          
        <TechnicalSkills />
          
        </div>
        
        
        <div className="flex items-center mt-8">
          <div className="flex-grow h-px bg-gray-300"></div>
            <a className="mx-4 font-medium cursor-pointer underline hover:scale-110 transition-transform duration-200" href="#projects">Projects</a>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </section>

      <div className='md:w-[60vw]' id='projects'>
        <Projects/>
      </div>
    </main>

    <footer className='flex flex-col justify-center w-full text-center text-[#5e5e5e] mb-4'>
      <div>Portfolio made with</div>
      <div>Next.js - Tailwind - Firebase</div>
    </footer>
    </div>
  );
}
