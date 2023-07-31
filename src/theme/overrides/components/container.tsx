import { Theme } from '@mui/material/styles';
import { ContainerProps } from '@mui/system/Container';

// ----------------------------------------------------------------------

export function container(theme: Theme) {

    const rootStyles = (ownerState: ContainerProps) => ({

    })

  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('lg')]: {
            maxWidth: 1260,
          }
        },
      },
    },
  };
}
