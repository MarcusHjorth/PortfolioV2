const TechnicalSkills = () => {
    
    const skills = ["JavaScript", "React", "NextJS", "Node.js", "CSS", "HTML", "Java", "Python", "Javalin", "SQL", "Git", "Github", "PostgreSQL", "TailwindCSS","C#", "Python", "Figma"];
    
    
    return ( 
        <section className="my-16 flex flex-col md:max-h-60">
            <h1 className="text-2xl my-4" id='skills'>Skills</h1>
            
            <div className="flex flex-wrap justify-center max-w-[40rem] m-auto">
                {skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className="md:px-4 md:py-2 px-3 py-1.5 md:2 m-1 rounded-md
                        bg-gradient-to-tr from-[#c8ab19] to-[#FFA751] 
                        hover:scale-110 transition duration-100">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
     );
}
 
export default TechnicalSkills;