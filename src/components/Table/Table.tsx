import React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';

import styles from './Table.module.scss';
import { RepositoryType } from './types';
import { COLUMNS } from './constants';

type TableProps = {
  /**
   * An array of repository data to be displayed in the table.
   * Each item represents a repository and contains properties like id, name, language, forks, stars, and the last updated date.
   */
  data: RepositoryType[];
  /**
   * A callback function that is triggered when a row in the table is selected.
   * The function receives the selection model, which includes the id(s) of the selected row(s).
   */
  onRowSelectionChange: (selection: GridRowSelectionModel) => void;
};

export const Table: React.FC<TableProps> = ({ data, onRowSelectionChange }) => {
  const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
    onRowSelectionChange(newSelection);
  };

  return (
    <DataGrid
      className={styles.dataGrid}
      rows={data}
      onRowSelectionModelChange={handleSelectionChange}
      columns={COLUMNS}
      initialState={{
        columns: {
          columnVisibilityModel: {
            id: false,
          },
        },
      }}
      autoPageSize
      pageSizeOptions={[5]}
    />
  );
};
