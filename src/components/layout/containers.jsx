import { Stack } from '@mui/joy';

export const AppContainer = ({ children }) => {
  const styles = { height: '100vh' };
  return <Stack sx={styles}>{children}</Stack>;
};

export const RoutesContainer = ({ children }) => {
  const styles = { flex: 1 };
  return <Stack sx={styles}>{children}</Stack>;
};

export const PageContainer = ({ children, sx }) => {
  const styles = {
    color: 'white',
    marginTop: '2rem',
    marginBottom: '2rem',
    alignItems: 'center',
    ...sx,
  };

  return <Stack sx={styles}>{children}</Stack>;
};
