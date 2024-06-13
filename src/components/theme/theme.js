'use client';
import { extendTheme } from '@mui/joy/styles';

const colors = {
  main: '#061110',
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
    dark: {
      palette: {
        primary: {
          main: colors.main,
          darkBlue: colors.darkBlue,
        },
      },
    },
  },
  typography: Object.fromEntries(
    headingStyles.map((heading) => [heading, { fontFamily: 'Arial' }]),
  ),
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme }) => ({
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
          backgroundColor: 'transparent',
          width: '100%',
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.main, // Change this to your desired background color
          // You can add more styles as needed
        },
      },
    },
  },
});
