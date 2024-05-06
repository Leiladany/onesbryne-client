/* eslint-disable react/no-unescaped-entities */
import { Section1, Section2, Section3 } from './components';
import { Stack } from '@mui/joy';

function Navbar() {
  return (
    <Stack component="nav">
      <Stack
        sx={{
          py: 1,
          flexDirection: 'row',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          zIndex: '1000',
        }}
      >
        <Section1 />

        <Section2 />

        <Section3 />
      </Stack>

      <Stack
        sx={{
          backgroundColor: 'common.white',
          mx: { xs: 2, md: 10 },
          height: '1px',
        }}
      />
    </Stack>
  );
}

export default Navbar;
