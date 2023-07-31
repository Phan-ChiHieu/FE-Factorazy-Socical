import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/system/Stack';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { RouterLink } from '@/routes/components';
import { HEADER, TITLE_HEADER } from './_mock';

export default function Header() {
  const theme = useTheme();

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
                  position: 'relative',
                  paddingRight: '18px',
                  '&:after': {
                    content: '""',
                    display: 'block',
                    width: '1px',
                    height: '100%',
                    backgroundColor: theme.palette.factorazy.background.paper,
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                  },
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
