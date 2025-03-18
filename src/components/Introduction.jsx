import React from "react"
import profileImage from "../assets/profilepic.png"

function Introduction() {
    return (
        <section className="min-h-screen py-16 md:py-24 bg-gradient-to-br from-gray-900 via-emerald-800 to-blue-900">
            <div className="container mx-auto px-6">
                {/* Top decorative element */}
                <div className="flex justify-center mb-12">
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 rounded-full"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Photo Area (Left) */}
                    <div className="w-full md:w-2/5 flex justify-center">
                        <div className="relative max-w-md">
                            {/* Decorative elements and frame */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-emerald-500"></div>
                            <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-blue-400 opacity-70"></div>
                            
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-emerald-500 opacity-20 blur-xl rounded-lg transform -translate-x-2 translate-y-2"></div>
                            
                            {/* Main image with gradient border */}
                            <div className="relative overflow-hidden rounded-lg p-1 bg-gradient-to-br from-emerald-500 via-blue-500 to-emerald-300">
                                <img 
                                    src={profileImage} 
                                    alt="Gerardo Macias Zaragoza" 
                                    className="w-full max-w-sm rounded-lg object-cover"
                                />
                            </div>
                            
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-emerald-500"></div>
                            <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-blue-400 opacity-70"></div>
                            
                            {/* Floating tech icons */}
                            <div className="absolute -right-8 top-1/4 w-16 h-16 bg-gray-800 bg-opacity-70 rounded-full flex items-center justify-center text-emerald-400 text-2xl shadow-lg">
                                <span className="transform rotate-12">AWS</span>
                            </div>
                            <div className="absolute -left-8 bottom-1/4 w-16 h-16 bg-gray-800 bg-opacity-70 rounded-full flex items-center justify-center text-blue-400 text-2xl shadow-lg">
                                <span className="transform -rotate-12">JS</span>
                            </div>
                            <div className="absolute -left-4 top-1/3 w-16 h-16 bg-gray-800 bg-opacity-70 rounded-full flex items-center justify-center text-emerald-400 text-2xl shadow-lg">
                                <span className="transform rotate-12">dj</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Area (Right) */}
                    <div className="w-full md:w-3/5">
                        <h1 className="text-4xl md:text-5xl text-white font-bold mb-2 relative">
                            Gerardo Macias Zaragoza
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></span>
                        </h1>
                        <h2 className="text-2xl bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold mb-6">
                            Industrial Engineer & Cloud Solutions Architect
                        </h2>
                        
                        <div className="space-y-4 text-gray-200 mb-8">
                            <p className="backdrop-blur-sm bg-emerald-900 bg-opacity-10 p-4 rounded-lg border-l-4 border-emerald-500">
                                I'm an <span className="text-blue-400 font-medium">Industrial Engineer</span> with expertise in programming and certified as an <span className="text-emerald-400 font-medium">AWS Cloud Practitioner</span>and a certified <span className="text-emerald-400 font-medium">developer by DEV.F</span>. Currently, I am pursuing my <span className="text-blue-400 font-medium">AWS Solutions Architect</span> certification to further enhance my expertise in designing scalable and cost-effective cloud infrastructures.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <div className="backdrop-blur-sm bg-blue-900 bg-opacity-10 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="text-emerald-400 font-semibold mb-2">Technical Expertise</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li>Industrial Process Optimization & Automation</li>
                                <li>Cloud Infrastructure Design (AWS)</li>
                                <li>Software Development & Programming (Python, JavaScript, React, Django, Flask)</li>
                                <li>Data Analysis, Forecasting & Decision-Making</li>
                                <li>Lean Manufacturing & Continuous Improvement Strategies</li>
                            </ul>
                        </div>

                        <div className="backdrop-blur-sm bg-emerald-900 bg-opacity-10 p-4 rounded-lg border-l-4 border-emerald-500">
                            <h3 className="text-blue-400 font-semibold mb-2">Professional Skills</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li>Project Management & Agile Methodologies</li>
                                <li>Cross-functional Collaboration & Leadership</li>
                                <li>Process Optimization & Business Intelligence</li>
                                <li>Technical Documentation & Report Writing</li>
                                <li>Strategic Problem-Solving & Risk Analysis</li>
                                <li>Continuous Improvement & Operational Efficiency</li>
                            </ul>
</div>
                            </div>
                            
                            <p className="backdrop-blur-sm bg-blue-900 bg-opacity-10 p-4 rounded-lg border-l-4 border-blue-500">
                                Driven by a passion for <span className="text-emerald-400 font-medium">innovative solutions</span> and <span className="text-blue-400 font-medium">continuous improvement</span>, I leverage my unique blend of industrial engineering principles and cloud technologies to optimize processes and drive digital transformation initiatives. My analytical mindset and technical acumen enable me to translate complex business requirements into scalable technical solutions.
                            </p>
                        </div>
                        
                        {/* Call to action buttons */}
                        <div className="flex gap-4">
                        <a 
                            href={"https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/Copia+de+Curri%CC%81culum+.pdf"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <button className="px-6 py-3 bg-transparent border-2 border-emerald-500 rounded-lg text-emerald-400 font-medium shadow-lg hover:shadow-emerald-500/20 transition duration-300 transform hover:-translate-y-1">
                                Download Resume
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
                
                {/* Bottom decorative element */}
                <div className="flex justify-center mt-16">
                    <div className="w-16 h-16 relative">
                        <div className="w-full h-full border-2 border-emerald-500 rounded-full absolute animate-ping opacity-20"></div>
                        <div className="w-full h-full border-2 border-blue-500 rounded-full absolute animate-pulse opacity-30"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction