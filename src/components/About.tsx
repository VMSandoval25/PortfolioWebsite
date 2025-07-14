import { useState } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import animationData from '../assets/Robot-Bot 3D.json';

const fadeVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function About() {
  const [section, setSection] = useState<'intro' | 'quote' | 'skills'>('intro');

  const handleClick = () => {
    setSection((prev) => {
      if (prev === 'intro') return 'quote';
      if (prev === 'quote') return 'skills';
      return 'intro';
    });
  };

  return (
    <section
      id="about"
      className="night-sky min-h-screen w-full flex flex-col items-center px-4 pt-10 md:pt-16 pb-12 text-center"
    >
      {/* Robot Animation */}
      <div className="w-full max-w-4xl mb-6 md:mb-10 -mt-4 sm:-mt-8 md:-mt-10">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] mx-auto"
        />
      </div>

      {/* Section Content with Animation */}
      <div
        onClick={handleClick}
        className="relative w-full max-w-screen-md sm:max-w-screen-lg md:max-w-4xl cursor-pointer select-none px-2 sm:px-6"
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
              <p className="text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-200">
                I'm a software engineer with a background in Machine Learning, Android, and Full Stack Development. I’m passionate about designing scalable systems, writing clean code, and building tools that actually ship. From Android apps to model pipelines, I connect all the layers.
              </p>
              <p className="mt-5 text-base text-gray-400">(click to continue...)</p>
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
              <h2 className="text-3xl md:text-4xl font-semibold italic text-white">
                “Trained a model for 4 hours to avoid labeling 20 images by hand.”
              </h2>
              <p className="text-lg text-gray-300 mt-4">— The art of overengineering</p>
              <p className="mt-4 text-base text-gray-400">(click to see skills)</p>
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
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center text-white">
                <SkillItem name="Python" icon="/icons/python.svg" />
                <SkillItem name="Android Development" icon="/icons/android.svg" />
                <SkillItem name="AWS" icon="/icons/aws.svg" />
                <SkillItem name="MySQL" icon="/icons/mysql.svg" />
                <SkillItem name="Docker" icon="/icons/docker.svg" />
                <SkillItem name="Linux" icon="/icons/linux.svg" />
              </div>
              <p className="mt-8 text-base text-gray-400">(click to return to intro)</p>
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
    <div className="flex flex-col items-center text-center text-base md:text-lg">
      <img src={icon} alt={name} className="h-14 md:h-16 mb-3" />
      <span className="text-gray-200">{name}</span>
    </div>
  );
}
