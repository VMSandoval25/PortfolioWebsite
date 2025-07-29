import { useState, type SetStateAction } from 'react';

import IardellIntro from '../../assets/projects/Iardell/Intro.png';
import IaredellBattle from '../../assets/projects/Iardell/battle.png';
import IaredellbattleResult from '../../assets/projects/Iardell/battleResults.png';
import IaredellstoryPlot from '../../assets/projects/Iardell/narration.png';
import IaredellplayerSelection from '../../assets/projects/Iardell/PlayerSelection.png';

import JymBrosSignIn from '../../assets/projects/JymBros/SignIn.png';
import JymBrosHome from '../../assets/projects/JymBros/home.png';
import JymBrosCalendar from '../../assets/projects/JymBros/calendar.png';
import JymBrosWorkout from '../../assets/projects/JymBros/workouts.png';
import JymBrosWorkout2 from '../../assets/projects/JymBros/workout2.png';
import JymBrosUserProfile from '../../assets/projects/JymBros/UserProfile.png';



const projects = [
    {
        title: 'Jym Bros: Fitness App',
        timeline: '2023',
        technologies: ['React Native', 'Firebase', 'Google Cloud Platform', 'Expo Go','GitHub APIs'],
        summary:
            `JymBros is a mobile application built with React Native and deployed via Expo Go, designed to help 
            gym-goers track workouts, explore exercises, and stay consistent with their fitness goals. It features 
            smooth onboarding and login using Firebase Authentication, while Cloud Firestore powers real-time data 
            syncing for logs, stats, and sessions. Global state is managed with useContext, keeping the app lightweight 
            and responsive across different user flows. The workout search tool is powered by a third-party API that 
            fetches exercise names, images, and targeted muscle groups, helping users easily build routines. With 
            efficient Firestore data modeling (Users, UserStats, Workouts, Sessions) and built-in push notifications, 
            the app delivers a fast, scalable experience backed by GCP—and gracefully handles API errors to ensure things 
            run smoothly even on unstable networks.`,
        contributions: [
            'Architected Firestore collections around user-centric access patterns, separating users, workouts, and session stats to enable real-time syncing and performant cross-view lookups with minimal reads',
            'Implemented secure Google Sign-In via Firebase Authentication, managing auth state globally with useContext to provide a seamless login flow across protected views',
            'Integrated a third-party Workout API to power dynamic exercise search with image and muscle group metadata, enhancing user engagement and discoverability without bloating local storage',
            'Developed a custom push notification system using Expo’s Notifications API, enabling scheduled reminders and reinforcing user accountability through asynchronous job handling'
        ],
        links: [
            { label: 'GitHub Repository', url: 'https://github.com/CS180-spring/cs180-22-jymbois' },
        ],
        images: [
            { src: JymBrosSignIn, caption: 'Sign-In Page' },
            { src: JymBrosHome, caption: 'Home Page' },
            { src: JymBrosCalendar, caption: 'Calendar + Add Workouts Page' },
            { src: JymBrosWorkout, caption: 'Workout Summary Page' },
            { src: JymBrosWorkout2, caption: 'Workout Search Page' },
            { src: JymBrosUserProfile, caption: 'User Profile Page'}
        ],
    },
    {
        title: 'Iaredell: Text-Based RPG',
        timeline: '2023',
        technologies: ['C++', 'CMake', 'Valgrind', 'Finite State Machine Pattern', 'Abstract Factory Pattern', 'Strategy Pattern'],
        summary:
            `Iardell is a terminal-based RPG built in C++ featuring turn-based combat, character classes, and branching narratives, 
      all rendered through stylized ASCII art. The game flows through structured states—menus, setup, narration, and battle—driven 
      by user input. Gameplay mechanics are built using custom structs for managing stats like HP, mana, 
      and level progression, with actions like attack and defend incorporating randomized logic and real-time updates. 
      The Strategy Pattern was applied to implement flexible weapon behavior, allowing easy extension of weapon types without redundant code. 
      The Abstract Factory Pattern ensures cross-platform compatibility by dynamically instantiating OS-specific components. 
      Clean modular functions and enums manage state transitions, and Valgrind was used extensively to validate memory safety and eliminate leaks, 
      ensuring stable and efficient performance.`,
        contributions: [
            'Engineered a modular weapon system using the Strategy Pattern, allowing for scalable combat mechanics and easy integration of future weapon types like magic tomes or ranged attacks',
            'Architected class-based character design, defining distinct roles (e.g., tank, wizard, rogue) with tailored stats, abilities, and growth mechanics to enrich player choice and replayability',
            'Developed the battle state machine and UI transitions, applying the Abstract Factory Pattern to ensure seamless platform compatibility and clean separation of platform-dependent logic',
            'Led systems design for combat interactions, including turn order, stat-based outcomes, and random event mechanics, balancing depth with intuitive player flow',
            'Conducted deep memory profiling and stress testing using Valgrind, ensuring zero memory leaks and optimal runtime performance even during extended play sessions.'
        ],
        links: [
            { label: 'GitHub Repository', url: 'https://github.com/VMSandoval25/Iaredell-Text-Based-RPG' },
        ],
        images: [
            { src: IardellIntro, caption: 'Intro Scene' },
            { src: IaredellBattle, caption: 'Battle UI' },
            { src: IaredellbattleResult, caption: 'Battle Results Screen' },
            { src: IaredellstoryPlot, caption: 'Narration and Plot' },
            { src: IaredellplayerSelection, caption: 'Player Selection' },
        ],
    },
    // Add more project objects here if needed
];

export default function ProjectGallery() {
    const [projectIndex, setProjectIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = projects[projectIndex];

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const handleProjectSwitch = (index: SetStateAction<number>) => {
        setProjectIndex(index);
        setCurrentImageIndex(0);
    };

    return (
        <div className="responsive-project-width py-10 space-y-6">
            {/* Project Selector */}
            <div className="flex justify-center gap-3 mb-6">
                {projects.map((proj, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleProjectSwitch(idx)}
                        className={`px-4 py-1 rounded-full text-sm font-medium border transition ${idx === projectIndex ? 'bg-primary text-white' : 'bg-transparent text-primary border-primary'}`}
                    >
                        {proj.title}
                    </button>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-section-title text-center text-primary">
                {project.title}
            </h3>

            {/* Image Gallery */}
            <div className="relative flex flex-col items-center">
                <div className="project-image-frame">
                    <img
                        src={project.images[currentImageIndex].src}
                        alt={project.images[currentImageIndex].caption}
                        className="project-image"
                    />

                    {/* Arrows */}
                    <div onClick={handlePrevImage} className="arrow-button left-0">
                        ←
                    </div>
                    <div onClick={handleNextImage} className="arrow-button right-0">
                        →
                    </div>
                </div>
                <p className="text-caption text-accent_alt mt-2">
                    {project.images[currentImageIndex].caption}
                </p>
            </div>

            {/* Summary */}
            <div className="text-muted px-2 space-y-5">
                <div>
                    <h4 className="project-section-title">Summary</h4>
                    <p className="project-text-content" dangerouslySetInnerHTML={{ __html: project.summary }} />
                </div>

                {/* Technologies */}
                <div>
                    <h4 className="project-section-title">Tools Used</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="bg-accent_alt text-bright_accent px-4 py-1 rounded-full text-section-text"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Contributions */}
                <div>
                    <h4 className="project-section-title">Role/Contributions</h4>
                    <ul className="list-disc ml-5 space-y-1">
                        {project.contributions.map((item, idx) => (
                            <li key={idx} className="project-text-content">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h4 className="project-section-title">Links</h4>
                    <div className="space-y-1 mt-1">
                        {project.links.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                className="text-accent hover:underline block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
