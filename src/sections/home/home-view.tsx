import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';
import React from 'react';
import Image from 'next/image';
import { bgGradient } from '@/theme/css';
import LogoIcon from '@/assets/icons/logo-icon';

// iamges
import BannerMain from '@/assets/images/home/banner_main.jpg';
import Typography from '@mui/material/Typography';
import SearchView from './components/search-view';

const HomeView = () => {
  return (
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
            }}
            priority
          />

          {/* <Box
            component="img"
            alt="auth"
            src={'/assets/images/home/banner_main.jpg'}
            sx={{
              objectFit: 'cover',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          /> */}

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 20,
            }}
          >
            <Stack direction="row" alignItems="flex-end" gap={3}>
              <div className="icon-factorazy">
                <LogoIcon />
              </div>
              <Box position="relative" pb='16px'>
                <Image alt="factorazy-log-500" src="/assets/images/home/logo-500.svg" width={94} height={53} quality={100} priority />
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" pt="18px">
              <Typography textTransform="uppercase" color="#2DC0AC" fontWeight={400} pr="6px" whiteSpace="nowrap">
                Green-light
              </Typography>
              <Typography textTransform="uppercase" fontWeight={400} whiteSpace="nowrap">
                your journey to better products!
              </Typography>
            </Stack>
            <SearchView />
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
  );
};

export default HomeView;

{
  /* <Box
            component="img"
            alt="auth"
            src={'/assets/images/home/banner_main.jpg'}
            sx={{
              objectFit: 'cover',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          /> */
}
