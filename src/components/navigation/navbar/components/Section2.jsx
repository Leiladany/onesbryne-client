import { Link, Stack, Typography } from '@mui/joy';

const Section2 = () => {
  return (
    <Stack component="section" sx={{ alignItems: 'center' }}>
      <Link href="/" underline='none'>
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
      </Link>
    </Stack>
  );
};

export default Section2;
