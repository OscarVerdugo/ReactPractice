import React from 'react';
import HomePage from "./containers/homePage/home_page.js";
import ProjectsPage from "./containers/projectsPage/projects_page.js";
import './App.css';
import {Container } from "@material-ui/core";


function App() {
  return (
    <Container>
      {/* <ProjectsPage/> */}
      <HomePage/>
    </Container>
  );
}

export default App;
