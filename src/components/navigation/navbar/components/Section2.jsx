import { Stack, Typography } from '@mui/joy';
import LinkComponent from '../../../layout/link/Link';

const Section2 = () => {
  return (
    <Stack component="section">
      <LinkComponent to="/">
        <Typography
          level="h1"
          sx={{
            fontFamily: 'italiana, sans-serif',
            fontWeight: 'lighter',
            fontSize: { xs: '32px', md: '64px' },
            textAlign: 'center',
          }}
        >
          ONESBRYNE
        </Typography>
      </LinkComponent>
    </Stack>
  );
};

export default Section2;
