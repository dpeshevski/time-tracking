import React, { createContext, useState, useEffect } from 'react';

import ProjectService from '../services/project.service';
import TimeService from '../services/times.service';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const projectService = new ProjectService();
  const timeService  = new TimeService();

  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);
  const [project, setProject] = useState();

  const [times, setTimes] = useState([]);
  const [totalAddedHours, setTotalAddedHours] = useState(null);
  const [projectId, setProjectId] = useState('');
  const [projectDetails, setProjectDetails] = useState({});
  const [time, setTime] = useState();

  const readProjectsList = async () => {
    const data = await projectService.readAll();
    setProjects(data);
  }

  const totalHours = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
  }

  const readProjectDetails = (async () => {
    const data = await timeService.readAll(projectId);
    const hours = data.times.map(time => time.amount);
    const totalHoursSum = totalHours(hours);
    setTotalAddedHours(totalHoursSum);
    setTimes(data.times);
    setProjectDetails({
      name: data.name,
      description: data.description
    });
  })

  useEffect(() => {
    if (projectId) {
      readProjectDetails();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);


  useEffect(() => {
    readProjectsList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createProject = async (payload) => {
    await projectService.create(payload);
    readProjectsList();
  };

  const deleteProject = async (id) => {
    await projectService.delete(id);
    readProjectsList();
  };

  const findProject = async (id) => {
    const project = projects.find((project) => project.id === id);
    setEditProject(project);
    setProject(project);
  };

  const updateProject = async (payload, id) => {
    await projectService.update(payload, id);
    readProjectsList();
    setEditProject(null);
  };

  const addTimeToProject = async (payload) => {
    await timeService.create(payload, projectId);
    readProjectDetails();
  }

  const deleteTimeFromProject = async (id) => {
    await timeService.delete(projectId, id);
    readProjectDetails();
  }

  const findTime = async (id) => {
    const time = times.find((time) => time.id === id);
    setTime(time);
  };

  const setProjectIdParam = async (param) => {
    setProjectId(param);
  }

  return (
    <ProjectContext.Provider
      value={{
        createProject,
        deleteProject,
        findProject,
        updateProject,
        editProject,
        projects,
        project,
        addTimeToProject,
        deleteTimeFromProject,
        setProjectIdParam,
        times,
        projectId,
        projectDetails,
        findTime,
        time,
        totalAddedHours
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
