import React, { useContext, useState } from 'react';

import CreateOrEditDialog from '../../dialogs/CreateOrEditDialog';

import { ProjectContext } from '../../../contexts/ProjectContext';

const AddTimeForm = (props) => {
  const {
    isVisible,
    setIsVisible
  } = props;

  const {
    addTimeToProject
  } = useContext(ProjectContext);

  const initialTimeState = {
    description: '',
    amount: null
  };

  const [time, setTime] = useState(initialTimeState);

  const [dialog, setDialog] = useState({
    headerTitle: 'Time',
    label: {
      description: 'description',
      amount: 'amount'
    },
    item: {
      description: 'Description',
      amount: 'Amount'
    }
  });

  const updateField = (data, field) => {
    setTime({
      ...time,
      [field]: data
    });
  }

  const saveTime = () => {
    addTimeToProject(time);
    setTime(initialTimeState);
    setIsVisible(false);
  }

  const hideDialog = () => {
    setIsVisible(false);
    setTime(initialTimeState);
  }

  return (
    <>
      <CreateOrEditDialog
        openDialog={isVisible}
        dialog={dialog}
        hideDialog={hideDialog}
        updateField={(data, field) => updateField(data, field)}
        saveItem={saveTime}
        item={time}
      />
    </>
  )
};

export default AddTimeForm;
