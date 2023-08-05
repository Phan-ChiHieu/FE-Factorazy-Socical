'use client'

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
import { HEADER, TITLE_HEADER } from './_mock';
import Link from 'next/link';
import PopoverNav from './popover-nav';
import { useLocales } from '@/locales';

export default function Header() {
  const { t } = useLocales();


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
              color: '#000',
              width: 1,
              paddingTop: '16px',
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
              {/* {TITLE_HEADER.manufacturing.value} */}
              {t('app')}
            </Typography>

            <Stack direction="row" gap="14px">
              <PopoverNav />
              <Typography
                variant="subtitle1"
                component={Link}
                href={TITLE_HEADER.signIn.href}
                color="#fff"
                position="relative"
                sx={{
                  padding: '10px 0px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    color: '#5DFBDD',
                  },
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
                sx={{
                  padding: '10px 16px',
                  border: '1px solid #D0D5DD',
                  borderRadius: '8px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    border: '1px solid #32DAC3',
                    background: '#32DAC3',
                    color: '#000',
                  },
                }}
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
