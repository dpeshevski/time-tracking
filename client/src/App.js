import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import ProjectContextProvider from './contexts/ProjectContext';

import Projects from './components/projects/Projects'
import ProjectDetails from './components/times/ProjectDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
        <Router>
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:projectId" component={ProjectDetails} />
          </Switch>
        </Router>
      </ProjectContextProvider>
    </div>
  );
}

export default App;
