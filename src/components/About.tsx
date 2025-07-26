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
                    <div text-caption>
                        Hi, I’m Victor — a software engineer raised in the San Fernando Valley by immigrant parents. I’m passionate about building software that makes a positive impact. I work across the full stack to develop scalable ML pipelines, Android workflows, and intuitive tools—blending backend logic with thoughtful design to simplify complex operations.<br /><br />

                        As a first-generation college graduate, my journey has taught me resilience, gratitude, and the value of hard work—qualities I bring to every team and project.<br /><br />

                        Outside of engineering, I love exploring emerging technologies, volunteering in my community, and spending quality time with my family.
                    </div>

                </div>
            </div>
        </section>
    );
}
