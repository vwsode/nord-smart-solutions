import { Box, Grid } from '@mui/material';

import { Header } from '../Header';
import { Footer } from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container direction="column" justifyContent="space-between" minHeight="100vh">
      <Header />
      <Box flex="1 0 0" component="main">
        {children}
      </Box>
      <Footer />
    </Grid>
  );
};
