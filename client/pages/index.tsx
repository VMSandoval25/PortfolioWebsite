import React, { useEffect, useState } from 'react';
import AboutSection from './AboutSection';
import Navbar from './Navbar';
import Header from './Header';
import ExperienceSection from './ExperienceSection';
import data from '../data/data.json';

function index() {
  return(
    <div>
      <Navbar />
      <Header/>
      <AboutSection/>
      <ExperienceSection data ={data} />
    </div>
  );
}

export default index
