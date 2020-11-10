import React, { useContext, useState, useRef } from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";

import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import Table from '../table/Table';

import { ProjectContext } from '../../contexts/ProjectContext';

import ProjectForm from './forms/ProjectCreateOrEditForm';
import ProjectDeleteForm from './forms/ProjectDeleteForm';

import ProjectDetails from '../times/ProjectDetails';

const Projects = () => {
  const { url } = useRouteMatch();

  const {
    projects,
    findProject,
    setProjectIdParam,
  } = useContext(ProjectContext);

  const [isVisible, setIsVisible] = useState(false);

  const [deleteProjectDialog, setDeleteProjectDialog] = useState(false);

  const toast = useRef(null);

  const editProject = (project) => {
    findProject(project.id);
    setIsVisible(true);
  }

  const confirmDeleteProject = (project) => {
    findProject(project.id);
    setDeleteProjectDialog(true);
  };

  const viewDetails = (project) => {
    setProjectIdParam(project.id);
  }

  const hideDialog = () => {
    setIsVisible(false);
  };

  const openNew = () => {
    setIsVisible(true);
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editProject(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProject(rowData)}
        />
          <Link to={`${url}/${rowData.id}`}>
            <Button
              icon="pi pi-eye"
              className="p-button-rounded p-button-secondary"
              onClick={() => {
                viewDetails(rowData);
              }}
            >
            </Button>
          </Link>
      </React.Fragment>
    );
  };

  const columns = [
    {
      field: "name",
      header: "Name",
      sortable: true
    },
    {
      field: "description",
      header: "Description"
    },
    {
      body: actionBodyTemplate
    }
  ]

  return (
    <div className="datatable">
      <Toast ref={toast} />

      <Table
        headerCaption={'Project'}
        items={projects}
        columns={columns}
        openNew={openNew}
      />

      <ProjectForm
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        hideDialog={hideDialog}
        openNew={openNew}
      />

      <ProjectDeleteForm
        isVisible={deleteProjectDialog}
        setIsVisible={setDeleteProjectDialog}
      />

      <Route path={`${url}/:projectId`}>
        <ProjectDetails/>
      </Route>
    </div>
  )
}

export default Projects;