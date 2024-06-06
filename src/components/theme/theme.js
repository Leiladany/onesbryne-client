'use client';
import { extendTheme } from '@mui/joy/styles';

const colors = {
  black: '#060B10',
  darkBlue: '#12181F',
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
          darkBlue: colors.darkBlue,
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
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: 'common.white',
          backgroundColor: 'transparent',
          border: '1px solid',
          borderRadius: '2px',
          borderColor: theme.vars.palette.neutral[600],
          transition: 'ease 0.3s',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: theme.vars.palette.neutral[300],
          },
        }),
      },
    },
  },
});
