import React, { useEffect } from "react";
import "particles.js";

const ParticlesComponent = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS("particles-js", {
                particles: {
                    number: { value: 100, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 3 },
                    move: { enable: true, speed: 2, direction: "none" },
                },
                interactivity: {
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                    },
                },
                retina_detect: true,
            });
        }
    }, []);

    return <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>;
};

export default ParticlesComponent;