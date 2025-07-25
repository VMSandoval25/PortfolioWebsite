import { useState } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import animationData from '../assets/Robot-Bot 3D.json';

const fadeVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function Background() {
  const [section, setSection] = useState<'intro' | 'quote' | 'skills'>('intro');

  const handleClick = () =>
    setSection((prev) =>
      prev === 'intro' ? 'quote' : prev === 'quote' ? 'skills' : 'intro'
    );

  return (
    <section
      id="background"
      className="min-h-screen w-full flex flex-col items-center px-4 md:px-8 pt-20 md:pt-12 pb-8 text-center overflow-x-hidden scroll-mt-20"
    >
      {/* Name & Title */}
      <motion.div
        className="flex flex-col items-center text-primary mb-6"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 20, 0],
        }}
        transition={{
          opacity: { duration: 1.5 },
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
        }}
      >
        <h1 className="text-hero-name italic">Victor Sandoval</h1>
        <p className="text-hero-subtitle text-secondary mt-2">
          Machine Learning • Android Development • Full Stack Dev
        </p>
      </motion.div>

      {/* Robot Animation */}
      <div className="w-full max-w-[500px] mb-1 -mt-6">
        <Lottie animationData={animationData} loop className="w-full mx-auto" />
      </div>

      {/* Section Content */}
      <div
        onClick={handleClick}
        className="relative w-full max-w-6xl cursor-pointer select-none px-4 text-primary"
      >
        <AnimatePresence mode="wait">
          {section === 'intro' && (
            <motion.div
              key="intro"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-section-title mb-3">Background</h2>
              <p className="text-section-text text-secondary leading-relaxed mx-auto max-w-5xl">
                I'm a software engineer with a background in Machine Learning, Android, and Full Stack Development. I’m passionate about designing scalable systems, writing clean code, and building tools that actually ship. From Android apps to model pipelines, I connect all the layers.
              </p>
              <p className="mt-6 text-caption text-accent">(click to continue...)</p>
            </motion.div>
          )}

          {section === 'quote' && (
            <motion.div
              key="quote"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-section-title italic">
                “Trained a model for 4 hours to avoid labeling 20 images by hand.”
              </h2>
              <p className="text-section-text mt-4">— The art of overengineering</p>
              <p className="mt-4 text-caption text-accent">(click to see skills)</p>
            </motion.div>
          )}


          {section === 'skills' && (
            <motion.div
              key="skills"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-section-title mb-6">Skills</h2>

              {/* Scrolling skill carousel, 3 items visible */}
              <div className="relative overflow-hidden w-[768px] max-w-full mx-auto">
                <motion.div
                  className="flex gap-10 w-max text-secondary"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                  }}
                >
                  {[
                    { name: 'Python', icon: '/icons/python.svg' },
                    { name: 'Android Development', icon: '/icons/android.svg' },
                    { name: 'AWS', icon: '/icons/aws.svg' },
                    { name: 'MySQL', icon: '/icons/mysql.svg' },
                    { name: 'Docker', icon: '/icons/docker.svg' },
                    { name: 'Linux', icon: '/icons/linux.svg' },
                  ]
                    .concat([
                      // Duplicate for seamless loop
                      { name: 'Python', icon: '/icons/python.svg' },
                      { name: 'Android Development', icon: '/icons/android.svg' },
                      { name: 'AWS', icon: '/icons/aws.svg' },
                      { name: 'MySQL', icon: '/icons/mysql.svg' },
                      { name: 'Docker', icon: '/icons/docker.svg' },
                      { name: 'Linux', icon: '/icons/linux.svg' },
                    ])
                    .map((skill, idx) => (
                      <SkillItem key={idx} name={skill.name} icon={skill.icon} />
                    ))}
                </motion.div>
              </div>

              <p className="mt-8 text-caption text-accent">(click to return to intro)</p>
            </motion.div>
          )}


        </AnimatePresence>
      </div>
    </section>
  );
}

interface SkillItemProps {
  name: string;
  icon: string;
}

function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <div className="flex flex-col items-center text-center text-skill-label">
      <img src={icon} alt={name} className="h-14 md:h-14 mb-3" />
      <span className="">{name}</span>
    </div>
  );
}
