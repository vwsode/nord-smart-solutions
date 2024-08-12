import { GridColDef } from '@mui/x-data-grid';

export const COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Название', flex: 1 },
  { field: 'lang', headerName: 'Язык', flex: 1 },
  { field: 'forks', headerName: 'Число форков', type: 'number', flex: 1 },
  { field: 'stars', headerName: 'Число звезд', type: 'number', flex: 1 },
  { field: 'updatedAt', headerName: 'Дата обновления', type: 'dateTime', flex: 1 },
];
