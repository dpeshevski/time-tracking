import React, { useContext, useState, useEffect } from 'react';

import CreateOrEditDialog from '../../dialogs/CreateOrEditDialog';

import { ProjectContext } from '../../../contexts/ProjectContext';

const ProjectForm = (props) => {
  const {
    isVisible,
    setIsVisible
  } = props;

  const {
    createProject,
    editProject,
    updateProject
  } = useContext(ProjectContext);

  const initialProjectState = {
    name: '',
    description: ''
  };

  const [projectData, setProjectData] = useState(initialProjectState);

  const [dialog, setDialog] = useState({
    headerTitle: 'Project',
    label: {
      name: 'name',
      description: 'description'
    },
    item: {
      name: 'Name',
      description: 'Description'
    }
  });

  useEffect(() => {
    if (editProject) {
      setProjectData(editProject);
    }
  }, [editProject]);

  const updateField = (data, field) => {
    setProjectData({
      ...projectData,
      [field]: data
    });
  }

  const saveProject = () => {
    if (!editProject) {
      createProject(projectData);
    } else {
      updateProject(projectData, editProject.id);
    }
    setProjectData(initialProjectState);
    setIsVisible(false);
  };

  const clearSelected = () => {
    setIsVisible(false);
    setProjectData(initialProjectState);
  };

  return (
    <>
      <CreateOrEditDialog 
        openDialog={isVisible}
        dialog={dialog}
        hideDialog={clearSelected}
        updateField={(data, field) => updateField(data, field)}
        saveItem={saveProject}
        item={projectData}
      />
    </>
  )
}

export default ProjectForm;
