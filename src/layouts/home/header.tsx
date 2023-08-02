import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
import { HEADER, TITLE_HEADER } from './_mock';
import Link from 'next/link';

export default function Header() {
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
            sx={{
              color: '#000',
              width: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              component={Link}
              href={TITLE_HEADER.manufacturing.href}
              color="#fff"
              position="relative"
              pr="18px"
              textTransform="uppercase"
            >
              {TITLE_HEADER.manufacturing.value}
            </Typography>
            <Stack direction="row" spacing="18px">
              <Typography
                variant="subtitle1"
                component={Link}
                href={TITLE_HEADER.signIn.href}
                color="#fff"
                position="relative"
                pr="18px"
                textTransform="uppercase"
                sx={{
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '1px',
                    height: '100%',
                    top: 0,
                    right: 0,
                    backgroundColor: '#fff',
                  }
                }}
              >
                {TITLE_HEADER.signIn.value}
              </Typography>

              <Typography
                variant="subtitle1"
                component={Link}
                href={TITLE_HEADER.register.href}
                color="#fff"
                position="relative"
                textTransform="uppercase"
              >
                {TITLE_HEADER.register.value}
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
