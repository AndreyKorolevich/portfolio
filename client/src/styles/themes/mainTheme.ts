import { createTheme } from '@mui/material/styles'

export const mainTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      main: '#FFB400',
    },
    secondary: {
      main: '#f8f8f2',
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: '0px !important',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '9.375rem',
          height: '9.375rem',
          backgroundColor: 'var(--substrate2)',
          transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'var(--tooltip) !important',
          color: 'var(--text)',
        },
        arrow: {
          color: 'var(--tooltip) !important',
          '&: before': {
            backgroundColor: 'var(--tooltip) !important',
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--skeleton)',
          borderRadius: '2px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: 'var(--substrate2)',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          '&.Mui-error': {
            color: 'red !important',
            fontSize: '0.75rem',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiDialog-paper': {
            backgroundColor: 'var(--background)',
            color: 'var(--main-text)',
            borderRadius: '2px',
            minHeight: '15rem',
            maxWidth: '40%',
            minWidth: '25rem',
            '@media (max-width:768px)': {
              maxWidth: '90%',
            },
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: 'var(--paragraph)',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Inter',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})
