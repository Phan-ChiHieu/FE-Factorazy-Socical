import LocationIcon from '@/assets/icons/location-icon';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
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
          <Stack direction="row" alignItems="center" justifyContent='center' gap='6px'>
            <Stack alignItems="center" justifyContent='center'>
              <LocationIcon />
            </Stack>
            <div>VIETNAM</div>
          </Stack>
          <Stack direction="row" alignItems="center" gap="18px">
            <Typography component={Link} href="/dashboard" variant="subtitle1">
              Terms and Conditions
            </Typography>
            <Typography component={Link} href="/dashboard" variant="subtitle1">
              Privacy Policy
            </Typography>
            <Typography component={Link} href="/dashboard" variant="subtitle1">
              Support
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
