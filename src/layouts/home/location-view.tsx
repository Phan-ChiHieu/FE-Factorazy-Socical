import { useGetIp } from '@/apis/search-home';
import LocationIcon from '@/assets/icons/location-icon';
import Stack from '@mui/material/Stack';
import React from 'react';

export default function LoacationView({ isColor = false }: { isColor?: boolean }) {
  const { ipToken } = useGetIp();

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="center" gap="6px">
        <Stack alignItems="center" justifyContent="center">
          <LocationIcon
            sx={{
              ['path']: {
                fill: isColor ? '#fff' : '#000',
              },
            }}
          />
        </Stack>
        <div>{ipToken.country}</div>
      </Stack>
    </>
  );
}
