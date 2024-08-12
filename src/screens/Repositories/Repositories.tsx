import React, { useState } from 'react';
import { GridRowSelectionModel } from '@mui/x-data-grid';

import { InfoPanel } from '../../components/InfoPanel';
import { Table } from '../../components/Table/Table';
import { useGetRepositories } from '../../hooks/useRepositories';
import { useSearch } from '../../hooks/useSearch';
import { RepositoryType } from '../../components/Table/types';

import styles from './Repositories.module.scss';

export const Repositories: React.FC = () => {
  const { searchTerm } = useSearch();
  const { repositories } = useGetRepositories(searchTerm);

  const [selectedRepository, setSelectedRepository] = useState<RepositoryType | null>(null);

  const handleRowSelectionChange = (selection: GridRowSelectionModel) => {
    const selectedId = selection[0];
    const repo = repositories.find((r) => r.id === selectedId);
    setSelectedRepository(repo || null);
  };

  return (
    <div className={styles.container}>
      <Table data={repositories} onRowSelectionChange={handleRowSelectionChange} />
      <InfoPanel repository={selectedRepository} />
    </div>
  );
};
