import React, { useContext } from 'react';

import DeleteConfirmationDialog from '../../dialogs/DeleteConfirmationDialog';

import { ProjectContext } from '../../../contexts/ProjectContext';

const DeleteTimeForm = (props) => {
  const {
    isVisible,
    setIsVisible
  } = props;

  const {
    time,
    deleteTimeFromProject
  } = useContext(ProjectContext);

  const deleteTime = () => {
    deleteTimeFromProject(time.id);
    setIsVisible(false);
  };

  const hideDeleteTimeDialog = () => {
    setIsVisible(false);
  }

  return (
    <>
      <DeleteConfirmationDialog
        isVisible={isVisible}
        item={time}
        deleteItem={deleteTime}
        deleteItemHeader={'Confirm'}
        hideDialog={hideDeleteTimeDialog}
      />
    </>
  )
}

export default DeleteTimeForm;
