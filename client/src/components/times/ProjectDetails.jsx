import React, { useState, useContext } from 'react';

import { Button } from 'primereact/button';

import Table from '../table/Table';

import { ProjectContext } from '../../contexts/ProjectContext';

import AddTimeForm from './forms/AddTimeForm';
import DeleteTimeForm from './forms/DeleteTimeForm';

const ProjectDetails = () => {
  const {
    times,
    projectDetails,
    totalAddedHours,
    findTime,
  } = useContext(ProjectContext);

  const [openNewTime, setOpenNewTime] = useState(false);
  const [deleteTimeDialog, setDeleteTimeDialog] = useState(false);

  const addTime = () => {
    setOpenNewTime(true);
  }
  
  const hideAddTimeDialog = () => {
    setOpenNewTime(false);
  }

  const confirmDeleteProjectTime = (time) => {
    findTime(time.id);
    setDeleteTimeDialog(true);
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProjectTime(rowData)}
        />
      </React.Fragment>
    );
  };

  const columns = [
    {
      field: "description",
      header: "Description"
    },
    {
      field: 'amount',
      header: 'Amount',
      sortable: true
    },
    {
      body: actionBodyTemplate
    }
  ]


  return (
    <div className="datatable">
      <div>
        <h5>Project Name: {projectDetails.name}</h5>
        <h5>Project Description: {projectDetails.description}</h5>
        <span>Total Added Hours: {totalAddedHours}</span>
      </div>

      <Table
        headerCaption={'Project Details'}
        items={times}
        columns={columns}
        openNew={addTime}
      />

      <AddTimeForm 
        isVisible={openNewTime}
        setIsVisible={setOpenNewTime}
        hideDialog={hideAddTimeDialog}
        openNew={openNewTime}
      />

      <DeleteTimeForm
        isVisible={deleteTimeDialog}
        setIsVisible={setDeleteTimeDialog}
      />
    </div>
  )
};

export default ProjectDetails;
