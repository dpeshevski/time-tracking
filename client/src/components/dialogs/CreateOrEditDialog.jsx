
import React from 'react';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';

const CreateOrEditDialog = (props) => {
  const {
    openDialog,
    dialog,
    hideDialog,
    saveItem,
    updateField,
    item
  } = props;

  const dialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveItem} />
    </React.Fragment>
  );

  return (
    <div>
      <Dialog
        visible={openDialog}
        style={{ width: "450px" }}
        header={dialog.headerTitle}
        modal
        className="p-fluid"
        footer={dialogFooter}
        onHide={hideDialog}
      >
        {
          dialog.label.name
          ?
          <div className="p-field">
            <label htmlFor={dialog.label.name}>{dialog.item.name}</label>
            <InputText
              id={dialog.label.name}
              value={item.name}
              onChange={(e) => updateField(e.target.value, dialog.label.name)}
              required
              autoFocus
            />
          </div>
          :
          <div></div>
        }
        {
          dialog.label.description
          ?
          <div className="p-field">
            <label htmlFor={dialog.label.description}>{dialog.item.description}</label>
            <InputTextarea
              id={dialog.label.description}
              value={item.description}
              onChange={(e) => updateField(e.target.value, dialog.label.description)}
              required
              rows={3}
              cols={20}
            />
          </div>
          :
          <div></div>
        }
        {
          dialog.label.amount
          ?
          <div className="p-field">
            <label htmlFor={dialog.label.amount}>{dialog.item.amount}</label>
            <InputNumber
              id={dialog.label.amount}
              value={item.amount}
              onValueChange={(e) => updateField(e.target.value, dialog.label.amount)}
            />
          </div>
          :
          <div></div>
        }
      </Dialog>
    </div>
  )
};

export default CreateOrEditDialog;
