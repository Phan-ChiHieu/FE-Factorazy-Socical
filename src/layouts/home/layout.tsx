import Box from '@mui/system/Box';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { useTheme } from '@mui/material/styles';

type HomeLayoutT = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutT) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1, backgroundColor: theme.palette.background.default }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
