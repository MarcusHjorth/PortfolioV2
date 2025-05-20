"use client"

import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";
import Image from 'next/image';


interface Project {
    id: string;
    title?: string;
    description?: string;
    github?: string;
    coverImage?: string;
}


const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const projectCollectionRef = collection(db, "Projects")

    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectCollectionRef)
            setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        }
        getProjects()
    }, [ ])

    return ( 
        <section className="justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <div className="w-full h-[10rem]">

                {projects.map((project, i) => {
                return (
                    <div key={project.id} className="bg-[#222222] shadow-md w-full rounded-lg p-6 mb-6 flex md:flex-row flex-col md:justify-between">
                        <div className='flex justify-between flex-col md:w-[50%]'>
                            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                            <p className="mb-4 overflow-clip overflow-ellipsis max-h-[70%] overflow-y-scroll">{project.description}</p>
                            <a className="hover:underline" 
                                target="_blank"
                                rel="noreferrer" 
                                href={project.github}>View Project</a>
                        </div>
                        <div className=''>
                            <Image
                                className="md:w-[20rem] md-w-[20rem] sm-mt-4 w-full h-auto overflow-hidden"
                                src={project.coverImage ? project.coverImage : "/GitHub.svg"}
                                alt="Project Image"

                                width={248}
                                height={248}
                                priority
                            />
                        </div>
                    </div>
                  


                )
               })} 



            </div>
        </section>
     );
}
 
export default Projects;