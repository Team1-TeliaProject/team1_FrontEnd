import React from 'react';
import './App.scss';

import Jobcard from './Components/Jobscard/index';
function App() {
  return (
    <div className="app">
      <h1>Welcome to the project</h1>
      <Jobcard
        user="applicant"
        jobtitle="Head of department"
        company="Business College Helsinki"
        deadline="04.04.2021"
        location="Helsinki Finland"
        type="Full-time"
        level="junior"
        skills="React ,Nodejs, TypeScript, AWS, Python, and everything that has to be known"
        applicantName="Mr Smith"
        applicantTitle="Student"
        applicantLevel="Mid-Senior"
        applicantType="part-time, Full-time"
        applicantSkills="Nothing interesting or worth mentioning"
        applicantLocation="Davos Switzerland"
        availability="03.04.2030"
      />
    </div>
  );
}

export default App;
