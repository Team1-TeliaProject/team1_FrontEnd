import React from 'react';

import './App.scss';
import JobCard from './Components/JobscardEmployee/index';

function App() {
  return (
    <div className="app">
      <h1>Welcome to the project</h1>
      <JobCard
        image="./logo192.png"
        jobtitle="Project Lead"
        deadline="03.05.2021"
        location="Helsinki Finland"
        level="Junior"
        company="Business College Helsinki"
        type="full-time"
        skills="Recat, Node, TypesCript 
        All list of possible skillset required by company.
        a brief description about the job role or the description of the job can be included here as well"
      />
    </div>
  );
}

export default App;
