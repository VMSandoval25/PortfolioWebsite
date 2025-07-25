import { useState } from 'react';
import officeImage from '../assets/office.jpeg';
import gradSelfie from '../assets/graduation_selfie.jpeg';
import familyPhoto from '../assets/family_grad.jpeg';

export default function About() {
  const images = [officeImage, gradSelfie, familyPhoto];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="about" className="responsive-section">
      <div className="responsive-about-container">
        {/* Image Block with controlled aspect ratio */}
        <div className="about-image-block">
          <div className="responsive-about-image">
            <img
              src={images[currentIndex]}
              alt="Victor"
              onClick={handleImageClick}
              className="about-image"
            />
          </div>
          <p className="text-caption text-primary mt-4 text-center">
            Engineer, first-gen graduate, lifelong learner.
          </p>
        </div>

        {/* Text Block */}
        <div className="w-full lg:w-[60%] text-muted text-section-text leading-relaxed space-y-6">
          <h2 className="text-section-title text-primary font-bold text-center lg:text-left">
            About Me
          </h2>
          <p>
            Hi, I’m Victor — a software engineer passionate about building tools that create real impact.
            I work across the full stack, blending logic with design to solve complex problems and simplify user experiences.
          </p>
          <p>
            I’m also a first-generation college graduate. That journey taught me resilience, gratitude,
            and the value of hard work — lessons I carry into every team and project I’m part of.
          </p>
          <p>
            Outside of code, I’m usually exploring new technologies, helping others break into tech,
            or spending time with my family (who means everything to me).
          </p>
        </div>
      </div>
    </section>
  );
}
