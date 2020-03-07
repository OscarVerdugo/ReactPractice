import React from 'react';
import { Container } from "@material-ui/core";
import './App.css';

import HomePage from "./containers/homePage/home_page.js";
import ProjectsPage from "./containers/projectsPage/projects_page.js";
import NotFoundPage from "./containers/NotFoundPage.js";
import ProjectDetailPage from "./containers/projectDetailPage/projectDetailPage.js"
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';

import Store from "./store";

function App() {
  return (
    <Provider store={Store}>
      <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/projects" component={ProjectsPage}/>
          <Route path="/project/:id" component={ProjectDetailPage}></Route>
          <Redirect from="/" to="/home" />
          <Route component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    </Container>
    </Provider>
  );
}

export default App;
