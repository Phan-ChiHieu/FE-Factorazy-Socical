'use client';

import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles';
import React, { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './next-emotion-cache';
import { palette } from './palette';
import { typography } from './typography';
import merge from 'lodash/merge';
import { componentsOverrides } from './overrides';

type ProviderPropsT = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ProviderPropsT) {
  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      typography,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(baseOption as ThemeOptions);

  theme.components = merge(componentsOverrides(theme));

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
