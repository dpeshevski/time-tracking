
import React from 'react';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const DeleteConfirmationDialog = (props) => {
  const {
    deleteItemHeader,
    isVisible,
    deleteItem,
    hideDialog,
    item
  } = props;

  const deleteItemDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
      <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteItem} />
    </React.Fragment>
  );

  return (
    <div>
      <Dialog
        visible={isVisible}
        style={{ width: '450px'}}
        header={deleteItemHeader}
        modal
        footer={deleteItemDialogFooter}
        onHide={hideDialog}
      >
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
          {item && <span>Are you sure you want to delete <b>{item.name ? item.name : item.description}</b>?</span>}
        </div>
      </Dialog>
    </div>
  );
}

export default DeleteConfirmationDialog;
