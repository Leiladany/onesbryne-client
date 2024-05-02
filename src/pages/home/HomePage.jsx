/* eslint-disable react/no-unescaped-entities */
'use client';
import { Section1, Section2, Section3 } from './components';
import { Stack } from '@mui/joy';

const HomePage = () => {
  return (
    <Stack id="container" sx={{ gap: 10 }}>
      <Section1 />

      <Section2 />

      <Section3 />
    </Stack>
  );
};

export default HomePage;
