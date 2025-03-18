import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import imdbGif from "../assets/gifs/imdb -project.gif";
import pokedex from "../assets/gifs/pokedex.gif";
import ecommerce from "../assets/gifs/flaskProject.gif";

// Import icons from a popular icon library
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaPython, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiFlask, SiBootstrap } from 'react-icons/si';

// Mapping for technology icons
const techIcons = {
  "React": <FaReact className="mr-1" />,
  "JavaScript": <FaJs className="mr-1" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1" />,
  "HTML": <FaHtml5 className="mr-1" />,
  "CSS": <FaCss3Alt className="mr-1" />,
  "Flask": <SiFlask className="mr-1" />,
  "Bootstrap": <SiBootstrap className="mr-1" />,
  "Python": <FaPython className="mr-1" />,
  "SQL Database": <FaDatabase className="mr-1" />,
};

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  liveAppLink, 
  githubLink,
  index
}) => {
  // Alternate layout based on index
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-100px" }}
      className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl 
                 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} mb-24 border border-gray-700
                 hover:shadow-teal-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2`}
    >
      {/* Project Image */}
      <div className="md:w-2/3 bg-gradient-to-br from-blue-900 to-teal-800 flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image} 
          alt={title} 
          className="max-w-full max-h-[500px] object-contain rounded-lg shadow-2xl z-10"
        />
      </div>

      {/* Project Details */}
      <div className="md:w-1/3 p-8 flex flex-col justify-between bg-gradient-to-br from-gray-800 to-gray-900">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, i) => (
              <motion.span 
                key={i} 
                whileHover={{ y: -5 }}
                className="bg-gray-700 text-teal-300 px-3 py-1 rounded-full text-xs flex items-center
                          border border-blue-500/30 shadow-lg"
              >
                {techIcons[tech] || null} {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={liveAppLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-lg
                      flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            <span>Live App</span> <FaExternalLinkAlt />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-teal-600 text-teal-400 px-6 py-2 rounded-lg
                      flex items-center justify-center space-x-2 hover:bg-teal-600 hover:text-white transition-colors"
          >
            <span>GitHub</span> <FaGithub />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "IMDB Lookalike",
      description: "My final project in the DEV.F certification, this front-end application is inspired by IMDB and developed using React, JavaScript, and Tailwind CSS. It integrates TheMovieDB API to dynamically fetch and display movie data, providing users with detailed information such as genres, original titles, overviews, and trailers. The application leverages React Router for navigation and state management through React hooks.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "TheMovieDB API", "React Router"],
      image: imdbGif,
      liveAppLink: "https://proyecto-imdb-83tr.vercel.app/",
      githubLink: "https://github.com/GerMaciasz/proyecto-imdb.git"
    },
    {
      title: "Pokédex",
      description: "One of my first projects using JavaScript as part of the DEV.F certification. This front-end application dynamically fetches and displays Pokémon data using the PokéAPI. It features an interactive grid where each Pokémon card flips on hover to reveal details such as type, weight, and attacks. Additionally, a real-time search bar allows users to filter Pokémon by name, enhancing usability and engagement.",
      technologies: ["HTML", "CSS", "JavaScript", "PokéAPI"],
      image: pokedex,
      liveAppLink: "https://proyecto-imdb-83tr.vercel.app/",
      githubLink: "https://github.com/GerMaciasz/proyecto-pokedex.git"
    },
    {
      title: "Ecommerce",
      description: "My first project using Flask as part of the DEV.F certification. This eCommerce platform features two user roles: admin and buyer. Buyers can browse products and add them to their cart, while admins can add and remove products. The project integrates Flask for the backend, Bootstrap for styling, Werkzeug for password security, a database to store users and products, and Flask-WTF for handling forms and user/product registration.",
      technologies: ["Flask", "Bootstrap", "Python", "CSS", "SQL Database", "HTML"],
      image: ecommerce,
      liveAppLink: "https://proyecto-imdb-83tr.vercel.app/",
      githubLink: "https://github.com/GerMaciasz/proyecto-pokedex.git"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black py-20 px-4 relative overflow-hidden" id='projects'>
      {/* Artistic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Animated floating circles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-0 right-10 w-64 h-64 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float animation-delay-3000"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 bg-geometric-pattern opacity-5"></div>
        
        {/* Light streaks */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-emerald-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-600 to-emerald-600 w-32 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A collection of my top projects showcasing my skills in web development and design.
          </p>
        </motion.div>

        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

// Add these CSS classes to your global CSS file or tailwind.config.js
const cssToAdd = `
@keyframes float {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-float {
  animation: float 12s infinite ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.bg-wave-pattern {
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(56, 178, 172, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.bg-geometric-pattern {
  background-image: 
    linear-gradient(45deg, rgba(56, 189, 248, 0.05) 25%, transparent 25%), 
    linear-gradient(-45deg, rgba(16, 185, 129, 0.05) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(56, 189, 248, 0.05) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(16, 185, 129, 0.05) 75%);
  background-size: 60px 60px;
}
`;

export default Projects;