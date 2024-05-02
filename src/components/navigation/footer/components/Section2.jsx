import { Stack, Typography } from '@mui/joy';

const Section2 = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: 'lighter',
        }}
      >
        Copyright© 2024
      </Typography>

      <Typography
        sx={{
          fontFamily: 'italiana, sans-serif',
          fontSize: '12px',
          fontWeight: 'lighter',
        }}
      >
        ONESBRYNE
      </Typography>
    </Stack>
  );
};

export default Section2;
