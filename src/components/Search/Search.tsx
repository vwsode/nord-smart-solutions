import { ChangeEvent, useState } from 'react';
import { Button, Grid } from '@mui/material';

import { useSearch } from '../../hooks/useSearch';

import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const { setSearchTerm, searchTerm } = useSearch();
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSearchTerm(event.target.value);
  };

  console.log(searchTerm, inputValue);

  return (
    <Grid container gap="8px" alignItems="center" component="form">
      <input
        placeholder="Введите поисковый запрос"
        value={inputValue}
        onChange={handleChange}
        className={styles.textField}
      />
      <Button type="submit" size="large" color="primary" variant="contained">
        Искать
      </Button>
    </Grid>
  );
};
