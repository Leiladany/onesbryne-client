'use client';
import { extendTheme } from '@mui/joy/styles';

const colors = {
  main: 'rgb(6, 11, 16)',
  maint: 'rgba(6, 11, 16, 0.7)',
  darkBlue: 'rgb(18, 24, 31)',
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
          main: colors.main,
          maint: colors.maint,
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
    JoyInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.neutral[300],
          backgroundColor: 'transparent',
          width: '100%',
          '&:hover': {
            color: theme.vars.palette.neutral[300],
          },
          '&:focus-within::before': {
            boxShadow: 'none',
          },
          '& input': {
            textAlign: 'center',
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
              display: 'none',
            },
          },
        }),
      },
    },
    JoySelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.neutral[300],
          backgroundColor: 'transparent',
          width: '100%',
          textAlign: 'center',
          '&:hover': {
            color: theme.vars.palette.neutral[300],
            backgroundColor: 'transparent',
          },
          '& button': {
            justifyContent: 'center',
          },
        }),
      },
    },
  },
});
