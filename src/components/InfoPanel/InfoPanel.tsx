import { Chip, Typography, Box } from '@mui/material';
import { Star } from '@mui/icons-material';

import { RepositoryType } from '../Table/types';

import styles from './InfoPanel.module.scss';

type InfoPanelProps = {
  repository: RepositoryType | null;
};

export const InfoPanel: React.FC<InfoPanelProps> = ({ repository }) => {
  return (
    <div className={styles.drawer}>
      {repository ? (
        <>
          <Typography variant="h5">{repository.name}</Typography>
          <Box className={styles.top}>
            {repository.lang && <Chip label={repository.lang} color="primary" />}
            <Box className={styles.stars}>
              <Star color="inherit" />
              <Typography variant="body2" color="CaptionText">
                {repository.stars}
              </Typography>
            </Box>
          </Box>
          <Box className={styles.bottom}>
            {repository.languages && (
              <Box className={styles.languages}>
                {repository.languages?.map((item) => (
                  <Chip key={item} label={item} color="default" size="small" />
                ))}
              </Box>
            )}
            <Typography>{repository.description}</Typography>
          </Box>
        </>
      ) : (
        <Typography className={styles.title} variant="body2">
          Выберите репозитарий
        </Typography>
      )}
    </div>
  );
};
