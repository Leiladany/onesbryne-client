'use client';
import { extendTheme } from '@mui/joy/styles';

const colors = {
  black: '#0d0d0d',
};

const headingStyles = [
  'h1',
  'h2',
  'h3',
  'h4',
  'title-lg',
  'title-md',
  'title-sm',
  'body-lg',
  'body-md',
  'body-sm',
  'body-xs',
];

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.black,
        },
      },
    },
  },
  typography: Object.fromEntries(
    headingStyles.map((heading) => [
      heading,
      { color: 'white', fontFamily: 'Arial' },
    ]),
  ),
});
