import { Container, Typography } from '@mui/material';

import styles from './Welcome.module.scss';

export const Welcome: React.FC = () => {
  return (
    <Container className={styles.container}>
      <Typography component="h1" variant="h3" textAlign="center">
        Добро пожаловать
      </Typography>
    </Container>
  );
};
