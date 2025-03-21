import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const headerRef = useRef(null);

    // Parallax effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (headerRef.current) {
                headerRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Particles animation setup
    const particlesCount = 50;
    const particles = Array.from({ length: particlesCount });

    return (
        <header className="header-container relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900"></div>
            
            {/* Animated particles background */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute rounded-full bg-white opacity-30"
                        style={{
                            width: Math.random() * 6 + 2,
                            height: Math.random() * 6 + 2,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() * -100 - 50],
                            x: [0, (Math.random() - 0.5) * 50],
                            opacity: [0.1, 0.6, 0],
                            scale: [1, Math.random() * 1.5 + 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
            
            {/* Animated grid pattern */}
            <motion.div 
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '50px 50px']
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            
            {/* Animated glowing accent line */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    style={{ top: '30%' }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        width: ['0%', '100%'],
                        left: ['-100%', '100%']
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                    style={{ top: '70%' }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        width: ['0%', '100%'],
                        left: ['100%', '-100%']
                    }}
                    transition={{
                        duration: 8,
                        delay: 4,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut"
                    }}
                />
            </div>
            
            {/* Main content with animations */}
            <div ref={headerRef} className="z-10 text-center max-w-4xl px-6">
                <motion.h1 
                    className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Full-Stack Developer
                </motion.h1>
                
                <motion.div
                    className="relative text-xl font-light mb-10 inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="leading-relaxed">
                        Combining programming expertise and cloud technologies to drive modern, efficient and scalable solutions.
                    </p>
                    
                    {/* Animated skills text */}
                    <motion.span 
                        className="block mt-2 text-blue-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        JavaScript • React • Node.js • DB • AWS • Flask • Python
                    </motion.span>
                    
                    <motion.div 
                        className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-6"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 80, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    />
                </motion.div>
                
                {/* Enhanced scroll indicator with "View My Work" text */}
                <motion.div 
                    className="absolute top-90 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                >
                    {/* Text label */}
                    <motion.p
                        className="text-blue-300 text-lg mb-2 font-light"
                        animate={{ 
                            y: [0, 5, 0],
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 0.3
                        }}
                    >
                        View My Work
                    </motion.p>
                    
                    {/* Chevron animation */}
                    <div className="flex flex-col items-center">
                        <motion.div
                            animate={{ 
                                y: [0, 5, 0],
                                opacity: [0.4, 1, 0.4]
                            }}
                            transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                        >
                            <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </motion.div>
                        <motion.div
                            animate={{ 
                                y: [0, 5, 0],
                                opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                delay: 0.2
                            }}
                        >
                            <svg className="w-6 h-6 text-blue-300 -mt-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;