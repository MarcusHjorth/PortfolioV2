const TechnicalSkills = () => {
    
    const skills = ["JavaScript", "React", "NextJS", "Node.js", "CSS", "HTML", "Java", "Python", "Javalin", "SQL", "Git", "Github", "PostgreSQL", "TailwindCSS","C#", "Python", "Figma"];
    
    
    return ( 
        <section className="flex flex-wrap justify-center my-16 max-w-[40rem] m-auto">
            {skills.map((skill, index) => (
                <div key={index} className="px-4 py-2 bg-gradient-to-br from-[#c8ab19] to-[#FFA751] m-2 rounded-md">
                    {skill}
                </div>
            ))}
        </section>
     );
}
 
export default TechnicalSkills;