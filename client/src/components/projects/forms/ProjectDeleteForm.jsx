import React, { useContext } from 'react';

import DeleteConfirmationDialog from '../../dialogs/DeleteConfirmationDialog';

import { ProjectContext } from '../../../contexts/ProjectContext';

const ProjectDeleteForm = (props) => {
  const {
    isVisible,
    setIsVisible,
  } = props;

  const {
    editProject,
    deleteProject
  } = useContext(ProjectContext);

  const deleteItem = () => {
    if (editProject) {
      deleteProject(editProject.id);
    }
    setIsVisible(false);
  }

  const hideDeleteProjectDialog = () => {
    setIsVisible(false);
  };

  return (
    <>
      <DeleteConfirmationDialog
        isVisible={isVisible}
        item={editProject}
        deleteItem={deleteItem}
        deleteItemHeader={'Confirm'}
        hideDialog={hideDeleteProjectDialog}
      />
    </>
  )
}

export default ProjectDeleteForm;