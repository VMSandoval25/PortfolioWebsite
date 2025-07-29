import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Media query hook
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
}

const experiences = [
  {
    title: 'Software Engineer',
    date: 'October 2023 - June 2025',
    company: 'Metafoodx Inc.',
    technologies: ['Python', 'JAVA (Android Development)', 'Javascript',
      'Vue', 'NodeJS', 'Flask', 'MySQL', 'AWS S3 & EC2', 'Docker', 'Jenkins'],
    summary:
      `At Metafoodx Inc., I built scalable machine learning pipelines for food recognition and led on automating 
      systems that streamlined data audits.  I also led Android and full-stack development efforts, building 
      onboarding APIs, internal dashboards, and mobile workflows that improved customer activation and operational visibility.`,
    details: ['Built and maintained a daily ML pipeline (Python, AWS, Jenkins) to automatically retrain food embeddings, cutting training time by 80% and enabling real-time label recognition',
      'Created a state-driven 6-digit activation flow with secure Android integration, reducing onboarding time to under 1 minute and eliminating the need for custom APKs',
      'Developed RESTful APIs and a Vue.js dashboard for activation code management, improving modularity and cross-platform consistency for customer onboarding',
      'Designed a rules engine (Python/SQL) that flagged 440+ food scan records per day based on anomalies and metadata validation, enabling proactive issue detection',
      'Built a Gemini API pipeline to auto-resolve 2,200+ flagged records daily, cutting human review needs by 85% through non-food detection and metadata validation'
    ]
  },
  {
    title: 'Software Engineer Intern',
    date: 'May 2023 - October 2023',
    company: 'Metafoodx Inc.',
    technologies: ['Python', 'Javascript', 'Linux', 'Vim'],
    summary: `Provided remote IT support by SSHing into Linux-based devices to diagnose and resolve issues using VIM and command-line tools. Contributed to Debian-based Python development, 
    improved system logging, and trained CNN models for image classification.`,
    details: ['Developed a CNN-based image classifier to detect food tray fullness (empty vs. full), enabling real-time refill alerts as part of a larger automated monitoring system',
      'Built internal tools using Python and Flask to streamline data retrieval from S3 buckets and collect remote device logs via reverse SSH',
      'Enhanced backend logging infrastructure by implementing Python wrapper functions for consistent exception tracking and debugging',
      'Created a utility script to compress Debian packages, optimizing software deployment and reducing update latency across edge devices.']
  },
  {
    title: 'Software Developer Intern',
    date: 'October 2022 - April 2023',
    technologies: ['Kotlin Multiplatform', 'DjangoDB', 'Full Stack'],
    company: 'Sizzle',
    summary: `Collaborated with a cross-functional team to develop a cross-platform messaging application connecting dietitians and patients. Engineered backend messaging 
    infrastructure using Kotlin Multiplatform, implemented webhooks for real-time communication, integrated MongoDB for user and message data persistence, and developed RESTful APIs to support 
    frontend interaction.`,
    details: ['Developed backend services using Kotlin Multiplatform and implemented the MVC architecture to manage user authentication, messaging logic, and data flow for a cross-platform dietitian-patient communication app.',
      'Integrated MongoDB to store user profiles and chat history, ensuring efficient querying and data consistency across platforms.',
      'Built and tested real-time messaging functionality using WebSockets and webhooks, validating endpoints with Postman and coordinating seamless frontend-backend integration.']
  },
];

export default function Experience() {
  const [flipped, setFlipped] = useState(Array(experiences.length).fill(false));
  const [focusedFlipped, setFocusedFlipped] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);

  const isDesktop = useMediaQuery('(min-width: 640px)');

  const toggleFlip = (index: number) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  useEffect(() => {
    document.body.style.overflow = focusedIdx !== null ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [focusedIdx]);

  return (
    <section id="experience" className="min-h-screen px-6 py-12 text-primary overflow-hidden">
      <h2 className="text-hero-subtitle text-center mb-16">Experience</h2>
      <div className="max-w-screen-xl mx-auto relative">
        <motion.div
          className={`flex gap-10 ${isDesktop ? 'w-max flex-row' : 'flex-col items-center'}`}
          animate={
            isDesktop && hoveredIdx === null && focusedIdx === null
              ? { x: ['0%', '-100%'] }
              : undefined
          }
          transition={
            isDesktop && hoveredIdx === null && focusedIdx === null
              ? { repeat: Infinity, duration: 80, ease: 'linear' }
              : undefined
          }
        >
          {(isDesktop ? [...experiences, ...experiences] : experiences).map((exp, idx) => {
            const originalIdx = idx % experiences.length;

            let cardClasses = 'experience-card transition-all duration-500 ease-in-out';
            if (!isDesktop) {
              cardClasses += ' w-[90%]';
            }

            if (isDesktop && focusedIdx !== null) {
              if (focusedIdx === idx) {
                cardClasses += ' opacity-0 pointer-events-none absolute';
              } else {
                cardClasses += ' opacity-30 scale-90 pointer-events-none';
              }
            } else if (hoveredIdx !== null) {
              if (hoveredIdx === idx) {
                cardClasses += ' scale-105';
              } else {
                cardClasses += ' scale-95 opacity-60';
              }
            }

            return (
              <motion.div
                key={idx}
                className={cardClasses}
                onClick={() => {
                  setHoveredIdx(null);
                  if (isDesktop) {
                    setFocusedIdx(idx);
                    setFocusedFlipped(true);
                  } else {
                    toggleFlip(originalIdx);
                  }
                }}
                onMouseEnter={() => isDesktop && setHoveredIdx(idx)}
                onMouseLeave={() => isDesktop && setHoveredIdx(null)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700 preserve-3d"
                  style={{
                    transform:
                      !isDesktop && flipped[originalIdx] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  <div className="card-face card-front">
                    <div className="flex flex-col gap-4 h-full">
                      <div>
                        <div className="text-base text-primary text-section-text uppercase  tracking-wide mb-2">
                          {exp.company}
                        </div>
                        <h3 className="text-section-text text-secondary">{exp.title}</h3>
                      </div>
                      <div className="text-sm text-accent italic">{exp.date}</div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies && exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-200 text-sm text-muted_alt px-3 py-1 rounded-full break-words max-w-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {isDesktop && (
                        <div className="text-base text-caption text-secondary_alt">
                          {exp.summary}
                        </div>
                      )}
                      <div className="mt-auto text-sm text-muted_alt italic text-right">
                        Tap to flip
                      </div>
                    </div>
                  </div>

                  <div className="card-face card-back">
                    {isDesktop ? (
                      <>
                        <h3 className="text-xl font-bold mb-4">Details</h3>
                        <ul className="list-disc pl-5 space-y-2 text-base">
                          {exp.details?.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div className="text-base">{exp.summary}</div>
                    )}
                    <div className="text-sm text-highlight italic text-right mt-4">
                      Tap to flip back
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {isDesktop && focusedIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setFocusedIdx(null)}
          >
            <div
              className="experience-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative transition-transform duration-700 preserve-3d w-full h-full"
                style={{
                  transform: focusedFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div className="card-face card-front">
                  <div>
                    <div className="text-base text-gray-500 uppercase tracking-wide mb-3">
                      {experiences[focusedIdx % experiences.length].company}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {experiences[focusedIdx % experiences.length].title}
                    </h3>
                    <p className="text-base text-gray-700">
                      {experiences[focusedIdx % experiences.length].summary}
                    </p>
                  </div>
                  <div className="text-sm text-gray-400 italic text-right">
                    Tap to flip
                  </div>
                </div>
                <div className="card-face card-back">
                  <div className="mb-4">
                    <div className="text-base text-bright_accent text-section-text uppercase tracking-wide mb-1">
                      {experiences[focusedIdx % experiences.length].company}
                    </div>
                    <h3 className="text-section-text mb-1">
                      {experiences[focusedIdx % experiences.length].title}
                    </h3>
                    <div className="text-small-caption text-highlight italic mb-4 mt-4">
                      {experiences[focusedIdx % experiences.length].date}
                    </div>
                    <h3 className="text-xl font-bold mb-2">Details</h3>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                      {experiences[focusedIdx % experiences.length].details?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm text-highlight italic text-right">
                    Tap outside of card to exit
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
