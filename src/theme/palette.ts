import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    factorazy: {
      text: {
        default: string;
        paper: string;
        info: string;
        placeholder: string;
      };
      background: {
        default: string;
        paper: string;
        transparent: string;
      };
      line: {
        default: string;
      };
    };
  }
}

// SETUP COLORS
const COMMON = {
  factorazy: {
    text: {
      default: '#000000',
      paper: '#FFFFFF',
      info: '#2DC0AC',
      placeholder: '#667085',
    },
    background: {
      default: '#FFFCF6',
      paper: '#FFFFFF',
      transparent: 'transparent',
    },
    line: {
      default: '#FFFCF6',
    },
  },
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
  };

  return mode === 'light' ? light : dark;
}
