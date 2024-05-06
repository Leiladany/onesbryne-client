import { Section1, Section2, Section3 } from './components';
import { Stack } from '@mui/joy';

function Footer() {
  return (
    <Stack component="footer">
      <Stack
        sx={{
          backgroundColor: 'common.white',
          mx: { xs: 2, md: 10 },
          height: '1px',
        }}
      />

      <Stack
        sx={{
          py: 2,
          flexDirection: { sx: 'column', md: 'row' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          zIndex: '1000',
          gap: { xs: 2, md: 0 },
        }}
      >
        <Section1 />

        <Section2 />

        <Section3 />
      </Stack>
    </Stack>
  );
}

export default Footer;
