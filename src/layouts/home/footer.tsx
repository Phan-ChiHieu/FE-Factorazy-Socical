import LocationIcon from '@/assets/icons/location-icon';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import React from 'react';

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        height: 45,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" width={1}>
          <Stack direction="row" alignItems="center">
            <div className="fac_icon">
              <LocationIcon />
            </div>
            <div>US</div>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <div>Item_1</div>
            <div>Item_2</div>
            <div>Item_3</div>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
