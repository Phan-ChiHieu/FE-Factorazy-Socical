'use client'

import CameraIcon from '@/assets/icons/camera-icon'
import SearchIcon from '@/assets/icons/search-icon'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Box from '@mui/system/Box'
import React from 'react'

export default function SearchView() {
    return (
        <>
            <Box sx={{
                marginTop: '24px',
                backgroundColor: '#fff',
                height: '44px',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                position: 'relative',
                zIndex: 50,
                marginBottom: '-24px',
                cursor: 'pointer',
            }}>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='Find Any Company’s Suppliers'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <CameraIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
        </>
    )
}
