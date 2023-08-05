'use client';

import React, { useCallback, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import CustomPopover, { usePopover } from '@/components/custom-popover';
import ButtonBase from '@mui/material/ButtonBase';
import Iconify from '@/components/iconify';
import { useLocales } from '@/locales';

export default function PopoverNav() {
  const locales = useLocales();

  console.log(locales);

  const popover = usePopover();

  const handleChangeLang = useCallback(
    (newLang: string) => {
      locales.onChangeLang(newLang);
      popover.onClose();
    },
    [locales, popover]
  );

  return (
    <>
      <ButtonBase
        onClick={popover.onOpen}
        sx={{
          pl: 1,
          py: 0.5,
          pr: 0.5,
          borderRadius: 1,
          typography: 'subtitle1',
          // bgcolor: 'background.neutral',
          color: '#fff',
          fontWeight: 600,
        }}
      >
        {locales.currentLang.value}
        <Iconify width={16} icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'} sx={{ ml: 0.5 }} />
      </ButtonBase>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 160 }}>
        {locales.allLangs.map((option) => (
          <MenuItem key={option.value} selected={option.value === locales.currentLang.value} onClick={() => handleChangeLang(option.value)}>
            <Iconify icon={option.icon} sx={{ borderRadius: 0.65, width: 28 }} />

            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
