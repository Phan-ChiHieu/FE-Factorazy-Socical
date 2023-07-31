'use client';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/system/Box';
import React from 'react';

const HomeView = () => {
  const theme = useTheme();

  console.log('>>>>> theme', theme);

  return (
    <Box
      sx={{
        color: theme.palette.factorazy.text.info,
      }}
    >
      HomeView
    </Box>
  );
};

export default HomeView;
