import { useState, useEffect } from 'react';
import officeImage from '../assets/office.jpeg';
import gradSelfie from '../assets/graduation_selfie.jpeg';
import familyPhoto from '../assets/family_grad.jpeg';

export default function About() {
    const images = [officeImage, gradSelfie, familyPhoto];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval); // Clean up
    }, [images.length]);

    return (
        <section id="about" className="responsive-section">
            <div className="responsive-about-container">
                {/* Image Block with controlled aspect ratio */}
                <div className="about-image-block">
                    <div className="responsive-about-image relative">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Victor"
                                onClick={handleImageClick}
                                className={`about-image absolute inset-0 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            />
                        ))}
                    </div>
                    <p className="text-caption text-primary mt-4 text-center">
                        Engineer, first-gen graduate, lifelong learner.
                    </p>
                </div>

                {/* Text Block */}
                <div className="w-full lg:w-[60%] text-secondary text-section-text leading-relaxed space-y-6">
                    <h2 className="text-section-title text-primary text-center lg:text-center">
                        About Me
                    </h2>
                    <div text-caption text-secondary>
                        I grew up in the San Fernando Valley as a first-generation college student raised by immigrant parents. 
                        That experience shaped my grit, curiosity, and drive to make a positive impact with tech. I care about 
                        using software to empower people—whether through automation, education, or access. Outside of engineering, 
                        I explore emerging tech, volunteer in my community, and value deep time with family.
                        <br/><br/> 
                        I didn’t grow up around engineers or startups, but I was always pulling things apart—remotes, websites, and anything 
                        I could tinker with. I’d root old Android devices just to unlock more functionality, chasing every opportunity to push the 
                        limits of the tools I had access to. Even without the latest gear, I stayed curious and scrappy, determined to understand 
                        how technology worked and how I could shape it. That early curiosity matured into a builder’s mindset—one grounded in 
                        resourcefulness, experimentation, and a deep commitment to creating tools that matter.
                    </div>

                </div>
            </div>
        </section>
    );
}
