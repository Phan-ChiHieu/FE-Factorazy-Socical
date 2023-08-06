'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/system/Stack';
import HeaderDesktop from './desktop/header-desktop';
import { useResponsive } from '@/hooks/use-responsive';
import HeaderMobile from './mobile/header-mobile';
import { HEADER } from './config-header';

export default function Header() {
  const smUp = useResponsive('up', 'sm');

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              color: '#ffffff',
              width: 1,
              paddingTop: '16px',
            }}
          >
            {/* start header desktop */}
            {smUp && <HeaderDesktop />}
            {/* end header desktop */}

            {/* start header mobile */}
            {!smUp && <HeaderMobile />}
            {/* end header mobile */}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
