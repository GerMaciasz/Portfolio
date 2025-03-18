import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import Blob1 from '../assets/lottie/Animation - 1741565841830.json';
import Blob2 from '../assets/lottie/Animation - 1741566083807 (2).json';

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

    return (
        <header className="header-container relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900"></div>
            
            {/* Animated blobs positioned strategically */}
            <div className="absolute top-0 left-0 w-1/2 opacity-60 blur-md">
                <Lottie animationData={Blob1} loop={true} />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 opacity-60 blur-md">
                <Lottie animationData={Blob2} loop={true} />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="stroke-white/10 stroke-2 fill-none" d="M0,0 L100,0 L100,100 L0,100 Z" vectorEffect="non-scaling-stroke" />
                    <path className="stroke-white/5 stroke-1 fill-none" d="M0,20 L100,50" vectorEffect="non-scaling-stroke" />
                    <path className="stroke-white/5 stroke-1 fill-none" d="M0,40 L100,70" vectorEffect="non-scaling-stroke" />
                    <path className="stroke-white/5 stroke-1 fill-none" d="M0,60 L100,90" vectorEffect="non-scaling-stroke" />
                </svg>
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
                        Combining programming expertise and cloud technologies to drive modern, efficient, and scalable solutions.
                        <span className="block mt-2 text-blue-300">JavaScript • React • Node.js • DB • AWS • Flask • Python</span>
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-6"></div>
                </motion.div>
                
                {/* Social links */}
                
                
                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ 
                        y: [0, 10, 0],
                        opacity: [0.4, 1, 0.4]
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    <div className="border border-white/30 rounded-full p-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;