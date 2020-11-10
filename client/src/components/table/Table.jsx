import React, { useRef } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

import './table.css';

const Table = (props) => {
  const {
    headerCaption,
    items,
    columns,
    openNew
  } = props;

  const dt = useRef(null);

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success p-mr-2"
          onClick={openNew}
        />
      </React.Fragment>
    )
  }

  const header = (
    <div className="table-header">
      <h5 className="p-m-0">{headerCaption}</h5>
    </div>
  );

  const columnsTable = columns.map((column, index) =>
    <Column
      key={index}
      field={column.field}
      header={column.header}
      body={column.body}
      sortable={column.sortable}
    />
  );

  return (
    <div className="card">
      <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>

      <DataTable
        ref={dt}
        value={items}
        dataKey="id"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        header={header}
      >
        {columnsTable}
      </DataTable>
    </div>
  );
}

export default Table;
