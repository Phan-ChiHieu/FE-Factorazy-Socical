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
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1, backgroundColor: '#000' }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
