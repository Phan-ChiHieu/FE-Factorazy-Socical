'use client';

import Box from '@mui/system/Box';
import React from 'react';
import Footer from './footer';
import { useResponsive } from '@/hooks/use-responsive';
import Header from './header';

type HomeLayoutT = {
  children: React.ReactNode;
};

export default function HomeLayoutView({ children }: HomeLayoutT) {
  const smUp = useResponsive('up', 'sm');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      {smUp && <Footer />}
    </Box>
  );
}
