import github from "../assets/github.png";
import linkedln from "../assets/linkedn.png";
import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send, Loader, CheckCircle } from 'lucide-react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;
        
        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
            isValid = false;
        }
        
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
            isValid = false;
        }
        
        if (!formData.subject.trim()) {
            tempErrors.subject = "Subject is required";
            isValid = false;
        }
        
        if (!formData.message.trim()) {
            tempErrors.message = "Message is required";
            isValid = false;
        }
        
        setErrors(tempErrors);
        return isValid;
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setIsSubmitting(true);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log('Form submitted:', formData);
                
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };
    
    return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-4">
                <div className="w-full max-w-xl" id="contact">
                    <h2 className="text-4xl font-bold text-white text-center mb-8 mt-16">
                        Contact Me
                        <div className="h-1 bg-gradient-to-r from-blue-600 to-emerald-500 w-24 mx-auto mt-2"></div>
                    </h2>
                    <p className="text-gray-400 text-center mt-6 max-w-2xl mb-10 mx-auto">
                        Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
                    </p>

                    {isSubmitted && (
                        <div className="mb-6 bg-emerald-800 text-emerald-100 p-4 rounded-lg flex items-center">
                            <CheckCircle className="mr-2" size={20} />
                            <span>Thank you for your message! I'll get back to you soon.</span>
                        </div>
                    )}

                    <form 
                        onSubmit={handleSubmit} 
                        className="bg-gray-800 shadow-lg rounded-xl px-10 pt-8 pb-10 mb-8 transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="mb-5 relative">
                            <label 
                                htmlFor="name" 
                                className="block text-blue-400 text-sm font-bold mb-2 flex items-center"
                            >
                                <User size={16} className="mr-2" />
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className={`shadow appearance-none border-none rounded-lg w-full py-3 px-4 
                                            bg-gray-700 text-white leading-tight 
                                            focus:outline-none focus:ring-2 focus:ring-blue-600
                                            transition-all duration-300 ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div className="mb-5 relative">
                            <label 
                                htmlFor="email" 
                                className="block text-blue-400 text-sm font-bold mb-2 flex items-center"
                            >
                                <Mail size={16} className="mr-2" />
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                className={`shadow appearance-none border-none rounded-lg w-full py-3 px-4 
                                            bg-gray-700 text-white leading-tight 
                                            focus:outline-none focus:ring-2 focus:ring-blue-600
                                            transition-all duration-300 ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-5 relative">
                            <label 
                                htmlFor="subject" 
                                className="block text-blue-400 text-sm font-bold mb-2 flex items-center"
                            >
                                <MessageSquare size={16} className="mr-2" />
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Email Subject"
                                className={`shadow appearance-none border-none rounded-lg w-full py-3 px-4 
                                            bg-gray-700 text-white leading-tight 
                                            focus:outline-none focus:ring-2 focus:ring-blue-600
                                            transition-all duration-300 ${errors.subject ? 'ring-2 ring-red-500' : ''}`}
                            />
                            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                        </div>

                        <div className="mb-7 relative">
                            <label 
                                htmlFor="message" 
                                className="block text-blue-400 text-sm font-bold mb-2 flex items-center"
                            >
                                <MessageSquare size={16} className="mr-2" />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="6"
                                className={`shadow appearance-none border-none rounded-lg w-full py-3 px-4 
                                            bg-gray-700 text-white leading-tight 
                                            focus:outline-none focus:ring-2 focus:ring-blue-600
                                            transition-all duration-300 ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-blue-600 to-emerald-500 
                                            text-white font-bold py-3 px-8 rounded-lg 
                                            hover:from-blue-700 hover:to-emerald-600 
                                            transition-all duration-300 
                                            focus:outline-none focus:shadow-outline
                                            flex items-center justify-center
                                            disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                {isSubmitting ? (
                                    <>
                                        <Loader className="animate-spin mr-2" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2" size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                                    {/* Social Media Buttons */}
                <div className="flex justify-center gap-6 mt-8 mb-4">
                    {/* LinkedIn Button */}
                    <a 
                        href="https://www.linkedin.com/in/gerardo-macias98/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:shadow-lg"
                        aria-label="LinkedIn Profile"
                    >
                        <img src={linkedln} alt="LinkedIn" className="w-8 h-8" />
                    </a>

                    {/* GitHub Button */}
                    <a 
                        href="https://github.com/GerMaciasz" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:shadow-lg"
                        aria-label="GitHub Profile"
                    >
                        <img src={github} alt="GitHub" className="w-8 h-8" />
                    </a>
                </div>

                    {/* Footer */}
                    <div className="text-center text-gray-500 text-sm mt-8 mb-16">
                        <p>© {new Date().getFullYear()} Gerardo Macias. All rights reserved.</p>
                        <p className="mt-2">
                        This website was developed using React and Node.js, deployed with AWS Amplify. It utilizes AWS S3 for serving static content and file downloads, AWS CloudFront for content delivery, and AWS Lambda with API Gateway for processing contact form submissions.                        </p>
                    </div>
                </div>
            </div>
    );
}

export default Contact;