import Stack from '@mui/material/Stack';
import React from 'react';
import IndustryIcon from '@/assets/icons/industry-icon';
import UserIcon from '@/assets/icons/user-icon';
import LoacationView from '../../location-view';

export default function HeaderMini() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" width={1}>
      <LoacationView isColor />
      <Stack direction="row" alignItems="center" gap={3}>
        <IndustryIcon />
        <UserIcon />
      </Stack>
    </Stack>
  );
}
