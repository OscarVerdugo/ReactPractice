import React from 'react';
import {Container } from "@material-ui/core";
import './App.css';
import HomePage from "./containers/homePage/home_page.js";

import ProjectsPage from "./containers/projectsPage/projects_page.js";



function App() {
  return (
    <Container>
      <ProjectsPage/>
      <HomePage/>
    </Container>
  );
}

export default App;
