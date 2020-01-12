import React, { Component } from "react";
import { init, getAllSourceCode } from "../scripts/Models/SourceCode";
import Project from "./Project";

class Projects extends Component {
  state = { loading: true, projects: [] };

  constructor(props) {
    super(props);
    init(this.doneLoading);
  }

  doneLoading = () => {
    let projects = getAllSourceCode();
    this.setState({ loading: false, projects: projects });
    console.log(projects);
  };

  renderLoading = () => {
    return <h1>LOADING</h1>;
  };
  renderNoProjects = () => {
    return <h1>NO PROJECTS</h1>;
  };
  renderProjects = () => {
    const { projects } = this.state;
    return projects.map(project => (
      <Project
        key={project["Project Name"]}
        name={project["Project Name"]}
        description={project["Project Description"]}
        download={project["Project Download Link"]}
      />
    ));
  };
  render() {
    const { loading, projects } = this.state;
    if (loading) {
      return this.renderLoading();
    } else {
      if (projects.length > 0) {
        return this.renderProjects();
      } else {
        return this.renderNoProjects();
      }
    }
  }
}

export default Projects;
