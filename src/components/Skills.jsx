import React, { useState, useEffect, useRef } from 'react';

const S3_ASSETS = {
    javascript: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/javascript.png",
    react: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/react.png",
    git: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/git.png",
    docker: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/docker.png",
    aws: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/awslogo.png",
    python: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/python.png",
    django: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/django.png",
    flask: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/flask.png",
    css: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Assets/Logos/css.png"
};

function Skills() {
    const skills = [
        { name: "JavaScript", image: S3_ASSETS.javascript, id: "js", color: "#F7DF1E" },
        { name: "ReactJs", image: S3_ASSETS.react, id: "react", color: "#61DAFB" },
        { name: "GIT", image: S3_ASSETS.git, id: "git", color: "#F05032" },
        { name: "Docker", image: S3_ASSETS.docker, id: "docker", color: "#2496ED" },
        { name: "AWS", image: S3_ASSETS.aws, id: "aws", color: "#FF9900" },
        { name: "Python", image: S3_ASSETS.python, id: "python", color: "#3776AB" },
        { name: "Django", image: S3_ASSETS.django, id: "django", color: "#50C878" },
        { name: "Flask", image: S3_ASSETS.flask, id: "flask", color: "#000000" },
        { name: "CSS", image: S3_ASSETS.css, id: "css", color: "#1572B6" },
    ];

    // Animation effect for skill items
    const [visibleItems, setVisibleItems] = useState({});
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationFrameRef = useRef(null);
    
    // Handle particles animation
    useEffect(() => {
        if (!canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initParticles();
        };
        
        // Create particles based on skill colors
        const initParticles = () => {
            particlesRef.current = [];
            const particleCount = Math.floor(canvas.width * canvas.height / 12000);
            
            for (let i = 0; i < particleCount; i++) {
                const randomSkill = skills[Math.floor(Math.random() * skills.length)];
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 3 + 1,
                    color: randomSkill.color,
                    vx: Math.random() * 0.5 - 0.25,
                    vy: Math.random() * 0.5 - 0.25,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };
        
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particlesRef.current.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${particle.color}${Math.round(particle.opacity * 255).toString(16).padStart(2, '0')}`;
                ctx.fill();
                
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                
                // Random direction changes
                if (Math.random() < 0.005) {
                    particle.vx = Math.random() * 0.5 - 0.25;
                    particle.vy = Math.random() * 0.5 - 0.25;
                }
            });
            
            // Connect nearby particles with lines
            for (let i = 0; i < particlesRef.current.length; i++) {
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const p1 = particlesRef.current[i];
                    const p2 = particlesRef.current[j];
                    
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `${p1.color}${Math.round((1 - distance / 100) * 40).toString(16).padStart(2, '0')}`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            
            animationFrameRef.current = requestAnimationFrame(drawParticles);
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawParticles();
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    // Intersection observer for skill items
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => ({...prev, [entry.target.id]: true}));
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const skillElements = document.querySelectorAll('.skill-item');
        skillElements.forEach(el => observer.observe(el));
        
        return () => {
            skillElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    // Mouse interaction handler
    const handleMouseMove = (e) => {
        if (!canvasRef.current || !particlesRef.current.length) return;
        
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        particlesRef.current.forEach(particle => {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 1000;
                particle.vx -= Math.cos(angle) * force;
                particle.vy -= Math.sin(angle) * force;
            }
        });
    };

    return (
                <div className="relative min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white flex items-center justify-center py-6" id="skills">
            {/* Canvas Background */}
            <canvas 
                ref={canvasRef} 
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            />
            
            {/* Interactive Layer */}
            <div 
                className="absolute top-0 left-0 w-full h-full z-10"
                onMouseMove={handleMouseMove}
            />
            
            {/* Content */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-20">
                {/* Description Section */}
                <div className="w-full text-center md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                    <div className="mb-6">
                        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                            Development Skills
                        </h2>
                        <div className="h-1 bg-gradient-to-r from-blue-500 to-emerald-500 w-24 mx-auto mt-2"></div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed backdrop-blur-sm bg-[#0F172A]/30 p-4 rounded-lg text-center">
                        Over the years, I have developed a diverse set of technical and professional skills 
                        that allow me to create, optimize, and implement efficient solutions. This section 
                        highlights my expertise in various technologies and tools, acquired through continuous 
                        learning and hands-on experience.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="w-full md:w-1/2 grid grid-cols-3 gap-4 md:gap-6">
                    {skills.map((skill) => (
                        <div 
                            key={skill.id}
                            id={`skill-${skill.id}`}
                            className={`skill-item flex flex-col items-center justify-center p-4 rounded-lg 
                                transform transition-all duration-500 hover:scale-105 
                                ${visibleItems[`skill-${skill.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{
                                background: `linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(30, 41, 59, 0.8) 100%)`,
                                backdropFilter: 'blur(4px)',
                                boxShadow: `0 8px 15px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2), 0 0 10px ${skill.color}40`
                            }}
                        >
                            <div className="relative p-2 rounded-full" 
                                style={{ 
                                    background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                                }}>
                                <img 
                                    src={skill.image} 
                                    alt={skill.name} 
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-300 hover:rotate-6"
                                />
                            </div>
                            <h3 className="text-sm font-medium mt-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
                                {skill.name}
                            </h3>
                            <div className="h-1 w-8 mt-1 rounded-full" style={{ backgroundColor: skill.color }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;