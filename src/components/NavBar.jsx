import React, { useRef, useState, useEffect } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Introduction from "./Introduction";

function NavBar() {
    const introductionRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const [activeSection, setActiveSection] = useState("introduction");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (ref, section) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
        setIsMenuOpen(false);
    };

    // Track scroll position to update active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            const introductionPosition = introductionRef.current.offsetTop;
            const educationPosition = educationRef.current.offsetTop;
            const skillsPosition = skillsRef.current.offsetTop;
            const projectsPosition = projectsRef.current.offsetTop;
            const contactPosition = contactRef.current.offsetTop;
            
            if (scrollPosition >= contactPosition) {
                setActiveSection("contact");
            } else if (scrollPosition >= projectsPosition) {
                setActiveSection("projects");
            } else if (scrollPosition >= skillsPosition) {
                setActiveSection("skills");
            } else if (scrollPosition >= educationPosition) {
                setActiveSection("education");
            } else if (scrollPosition >= introductionPosition){
                setActiveSection("introduction");
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-gray-950/60 backdrop-blur-lg shadow-lg z-50 transition-all duration-300">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
                    <div className="flex items-center">
                        
                        <h1 id="portfolio-title" className="text-xl md:text-2xl font-bold text-white tracking-wider">

                            <span className="text-blue-500 text-3xl font-bold mr-2">Portfolio</span>
                        </h1>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="block md:hidden text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    
                    {/* Desktop navigation */}
                    <div className="hidden md:flex text-white space-x-8">
                    <button 
                            onClick={() => scrollToSection(introductionRef, "introduction")} 
                            className={`cursor-pointer transform transition-all duration-300 hover:text-blue-400 ${
                                activeSection === "introduction" 
                                ? "text-blue-400 font-bold shadow-none transition-all duration-300" 
                                : "text-white"
                            }`}
                        >
                            Introduction
                        </button>
                        <button 
                            onClick={() => scrollToSection(educationRef, "education")} 
                            className={`cursor-pointer transform transition-all duration-300 hover:text-blue-400 ${
                                activeSection === "education" 
                                ? "text-blue-400 font-bold shadow-none transition-all duration-300" 
                                : "text-white"
                            }`}
                        >
                            Education
                        </button>
                        <button 
                            onClick={() => scrollToSection(skillsRef, "skills")} 
                            className={`cursor-pointer transform transition-all duration-300 hover:text-blue-400 ${
                                activeSection === "skills" 
                                ? "text-blue-400 font-bold shadow-none transition-all duration-300" 
                                : "text-white"
                            }`}
                        >
                            Skills
                        </button>
                        <button 
                            onClick={() => scrollToSection(projectsRef, "projects")} 
                            className={`cursor-pointer transform transition-all duration-300 hover:text-blue-400 ${
                                activeSection === "projects" 
                                ? "text-blue-400 font-bold shadow-none transition-all duration-300" 
                                : "text-white"
                            }`}
                        >
                            Projects
                        </button>
                        <button 
                            onClick={() => scrollToSection(contactRef, "contact")} 
                            className={`cursor-pointer transform transition-all duration-300 hover:text-blue-400 ${
                                activeSection === "contact" 
                                ? "text-blue-400 font-bold shadow-none transition-all duration-300" 
                                : "text-white"
                            }`}
                        >
                            Contact
                        </button>
                    </div>
                </div>
                
                {/* Mobile navigation menu */}
                <div className={`md:hidden bg-gray-900 ${isMenuOpen ? "max-h-60" : "max-h-0"} overflow-hidden transition-all duration-300`}>
                    <div className="flex flex-col px-4 pb-4 space-y-3">
                        <button 
                            onClick={() => scrollToSection(introductionRef, "introduction")} 
                            className={`cursor-pointer py-2 transition-colors duration-300 ${
                                activeSection === "introduction" ? "text-blue-400" : "text-white"
                            }`}
                        >
                            Introduction
                        </button>
                        <button 
                            onClick={() => scrollToSection(educationRef, "education")} 
                            className={`cursor-pointer py-2 transition-colors duration-300 ${
                                activeSection === "education" ? "text-blue-400" : "text-white"
                            }`}
                        >
                            Education
                        </button>
                        <button 
                            onClick={() => scrollToSection(skillsRef, "skills")} 
                            className={`cursor-pointer py-2 transition-colors duration-300 ${
                                activeSection === "skills" ? "text-blue-400" : "text-white"
                            }`}
                        >
                            Skills
                        </button>
                        <button 
                            onClick={() => scrollToSection(projectsRef, "projects")} 
                            className={`cursor-pointer py-2 transition-colors duration-300 ${
                                activeSection === "projects" ? "text-blue-400" : "text-white"
                            }`}
                        >
                            Projects
                        </button>
                        <button 
                            onClick={() => scrollToSection(contactRef, "contact")} 
                            className={`cursor-pointer py-2 transition-colors duration-300 ${
                                activeSection === "contact" ? "text-blue-400" : "text-white"
                            }`}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main sections */}
            <div ref={introductionRef}>
                <Introduction />
            </div>
            <div ref={educationRef}>
                <Education />
            </div>

            <div ref={skillsRef}>
                <Skills />
            </div>

            <div ref={projectsRef}>
                <Projects />
            </div>

            <div ref={contactRef}>
                <Contact />
            </div>
        </>
    );
}

export default NavBar;