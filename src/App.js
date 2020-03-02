import React from 'react';
import { Container } from "@material-ui/core";
import './App.css';

import HomePage from "./containers/homePage/home_page.js";
import ProjectsPage from "./containers/projectsPage/projects_page.js";
import NotFoundPage from "./containers/NotFoundPage.js";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/projects" component={ProjectsPage}/>
          <Redirect from="/" to="/home" />
          <Route component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
