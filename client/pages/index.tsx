import React, { useEffect, useState } from 'react';
import AboutSection from './AboutSection';
import Navbar from './Navbar';
import Header from './Header';
import ExperienceSection from './ExperienceSection';
import data from '../data/data.json';
import ContactSection from './ContactSection';
import ProjectSection from './ProjectSection';

function index() {
  return(
    <div>
      <Navbar />
      <Header/>
      <AboutSection/>
      <ExperienceSection data ={data} />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default index
