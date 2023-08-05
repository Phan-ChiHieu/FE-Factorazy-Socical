'use client'

import Box from '@mui/system/Box';
import React from 'react';
import Footer from './footer';
import dynamic from 'next/dynamic';

const HeaderNoSSR = dynamic(() => import('./header'), { ssr: false });

type HomeLayoutT = {
  children: React.ReactNode;
};

export default function HomeLayoutView({ children }: HomeLayoutT) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <HeaderNoSSR />
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
