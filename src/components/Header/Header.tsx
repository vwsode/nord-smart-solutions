import { Box, Container, Grid } from '@mui/material';

import { Search } from '../Search';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Box component="header" className={styles.header}>
      <Container maxWidth="xl" className={styles.headerContainer}>
        <Grid container alignItems="center" height="100%">
          <Search />
        </Grid>
      </Container>
    </Box>
  );
};
