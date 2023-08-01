import Box from '@mui/system/Box';
import React from 'react';
import Header from './header';
import Footer from './footer';

type HomeLayoutT = {
  children: React.ReactNode;
};

export default function HomeLayoutView({ children }: HomeLayoutT) {
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
      <Footer />
    </Box>
  );
}
