import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/system/Container';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { RouterLink } from '@/routes/components';
import { TITLE_HEADER } from './_mock';

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar>
      <Toolbar disableGutters>
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              color: theme.palette.factorazy.text.default,
              width: 1,
            }}
          >
            <Link
              component={RouterLink}
              underline="none"
              sx={{
                color: theme.palette.factorazy.text.paper,
                textTransform: 'uppercase',
                fontSize: theme.typography.subtitle1,
              }}
              href={TITLE_HEADER.manufacturing.href}
            >
              {TITLE_HEADER.manufacturing.value}
            </Link>
            <Stack direction="row" spacing="18px">
              <Link
                component={RouterLink}
                underline="none"
                sx={{
                  color: theme.palette.factorazy.text.paper,
                  textTransform: 'uppercase',
                  fontSize: theme.typography.subtitle1,
                }}
                href={TITLE_HEADER.signIn.href}
              >
                {TITLE_HEADER.signIn.value}
              </Link>
              <Link
                component={RouterLink}
                underline="none"
                sx={{
                  color: theme.palette.factorazy.text.paper,
                  textTransform: 'uppercase',
                  fontSize: theme.typography.subtitle1,
                }}
                href={TITLE_HEADER.register.href}
              >
                {TITLE_HEADER.register.value}
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
