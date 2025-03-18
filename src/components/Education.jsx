import React from "react"
import universidad from "../assets/marista.png"
import aws from "../assets/awslogo.png"
import devf from "../assets/devf.png"

function Education() {
    const certifications = [
        {
            id: 1,
            title: "Bachelor's Degree in Industrial Engineering",
            issuer: "Universidad Marista de Merida",
            description: "Specialized in process optimization and efficiency improvement, with a strategic focus on problem-solving through critical analysis and analytical thinking. Experienced in data-driven decision-making, driving project management with a continuous improvement approach to maximize operational performance and achieve sustainable results.",
            img: universidad,
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            description: "Demonstrated foundational knowledge of AWS cloud computing, including cloud architecture, security, billing, pricing models, and best practices. Proficient in AWS services and their applications for scalable, cost-effective cloud solutions.",
            img: aws,
            link: "https://www.credly.com/badges/e223fb3a-c0b0-4090-9836-6d4024a51052/public_url",
            color: "from-emerald-500 to-teal-400"
        },
        {
            id: 3,
            title: "Professional Certification",
            issuer: "Dev.f",
            date: "March 2023",
            description: "Gained expertise in modern web development with proficiency in JavaScript, React, and RESTful API integration. Developed hands-on experience in building scalable applications, front-end frameworks, and efficient API communication.",
            img: devf,
            link: "https://my-portfolio-project-gerardo-macias.s3.us-east-1.amazonaws.com/DEVF_GERARDO_ANDRES+X_PROFESSIONAL_BECAS+(1).pdf",
            color: "from-cyan-500 to-blue-400"
        }
    ];
    
    return(
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 relative" id="education">
            {/* Subtle background accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-emerald-500 blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="relative inline-block">
                        <h1 className="text-5xl font-bold text-white text-center mb-12">
                            Education & Certifications
                            <div className="h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 w-96 mx-auto mt-2"></div>
                        </h1>
                    </div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        My formal education and professional certifications, showcasing my expertise and continuous learning journey.
                    </p>
                </div>
    
                {/* Certification cards */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mx-auto">
                    {certifications.map(cert => (
                        <div 
                            key={cert.id} 
                            className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-xl border border-opacity-20 border-cyan-500/20 flex flex-col md:flex-row items-center"
                        >
                            {/* Left side - Certification Information */}
                            <div className="flex-grow p-6 md:pr-0">
                                <div className="flex flex-col h-full">
                                    <div>
                                        <p className={`text-sm ${cert.id === 1 ? 'text-blue-400' : cert.id === 2 ? 'text-emerald-400' : 'text-cyan-400'} mb-1`}>{cert.issuer}</p>
                                        <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                                        <p className="text-xs text-gray-400 mb-4">{cert.date}</p>
                                        <div className={`w-16 h-1 bg-gradient-to-r ${cert.color} mb-4 rounded`}></div>
                                    </div>
                                    <p className="text-gray-300 mb-4 flex-grow">{cert.description}</p>
                                    {cert.link && (
                                        <a 
                                            href={cert.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className={`inline-flex items-center ${cert.id === 2 ? 'text-emerald-400 hover:text-emerald-300' : 'text-cyan-400 hover:text-cyan-300'} font-medium mt-auto transition-colors duration-200`}
                                        >
                                            View Certificate
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            {/* Right side - Image */}
                            <div className="w-32 h-32 md:w-48 md:h-48 p-4 flex-shrink-0 bg-slate-800 rounded-lg m-4 shadow-inner">
                                <img 
                                    src={cert.img} 
                                    alt={cert.title} 
                                    className="w-full h-full object-contain drop-shadow-md" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education