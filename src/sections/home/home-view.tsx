'use client';

import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';
import React from 'react';
import Image from 'next/image';
import { bgGradient } from '@/theme/css';
import LogoIcon from '@/assets/icons/logo-home-icon';

// iamges
import BannerMain from '@/assets/images/home/banner_main.jpg';
import Typography from '@mui/material/Typography';
import SearchView from './components/search-view';
import { useResponsive } from '@/hooks/use-responsive';
import HomeLayoutView from '@/layouts/home';

const HomeView = () => {
  const smUp = useResponsive('up', 'sm');

  return (
    <HomeLayoutView>
      <Stack
        sx={{
          color: '#fff',
          height: '100%',
          backgroundColor: '#FFF',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                ...bgGradient({
                  direction: '180deg',
                  startColor: 'rgba(8, 44, 42, 0.00) 0%',
                  endColor: '#071F1D 100%',
                }),
              },
            }}
          >
            <Image
              alt="factorazy-banner"
              src={BannerMain}
              placeholder="blur"
              quality={100}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
              }}
              priority
            />

            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20,
                width: { xs: '100%', sm: 'auto' },
                paddingX: '10px',
              }}
            >
              <Stack
                sx={{
                  alignItems: { xs: 'center', sm: 'flex-end' },
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: { xs: '12px', sm: '24px' },
                }}
              >
                <div className="icon-factorazy">
                  <LogoIcon />
                </div>
                <Box
                  position="relative"
                  pb="16px"
                  sx={{
                    width: { xs: '78px', sm: '94px' },
                    height: { xs: '48px', sm: '54px' },
                  }}
                >
                  <Image alt="factorazy-log-500" src="/assets/images/home/logo-500.svg" fill quality={100} priority />
                </Box>
              </Stack>
              <Stack justifyContent="center" direction="row" alignItems="center" pt="18px">
                {smUp && (
                  <Typography textTransform="uppercase" fontWeight={400} whiteSpace="nowrap">
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-block',
                        color: '#2DC0AC',
                        textTransform: 'uppercase',
                      }}
                    >
                      Green-light
                    </Box>{' '}
                    your journey to better products!
                  </Typography>
                )}
                {!smUp && (
                  <Typography textTransform="uppercase" fontWeight={400} whiteSpace="nowrap" textAlign="center">
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-block',
                        color: '#2DC0AC',
                        textTransform: 'uppercase',
                      }}
                    >
                      Green-light
                    </Box>{' '}
                    your journey <br /> to better products!
                  </Typography>
                )}
              </Stack>
              {/* start:  Search Client */}
              <SearchView />
              {/* end:  Search Client */}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            color: '#000',
          }}
        />
      </Stack>
    </HomeLayoutView>
  );
};

export default HomeView;
