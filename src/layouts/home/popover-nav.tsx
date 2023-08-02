'use client';

import React, { useCallback, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import CustomPopover, { usePopover } from '@/components/custom-popover';
import ButtonBase from '@mui/material/ButtonBase';
import Iconify from '@/components/iconify';


const series = [
    {
        type: 'EN',
    },
    {
        type: 'VI',
    },
    {
        type: 'FN',
    },
];

export default function PopoverNav() {


    const popover = usePopover();

    const [seriesData, setSeriesData] = useState('EN');

    const handleChangeSeries = useCallback(
        (newValue: string) => {
            popover.onClose();
            setSeriesData(newValue);
        },
        [popover]
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
                {seriesData}
                <Iconify width={16} icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'} sx={{ ml: 0.5 }} />
            </ButtonBase>

            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 70 }}>
                {series.map((option) => (
                    <MenuItem key={option.type} selected={option.type === seriesData} onClick={() => handleChangeSeries(option.type)}>
                        {option.type}
                    </MenuItem>
                ))}
            </CustomPopover>
        </>
    )
}
