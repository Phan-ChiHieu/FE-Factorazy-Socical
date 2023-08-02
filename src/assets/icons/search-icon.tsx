import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function SearchIcon({ ...other }: BoxProps) {
  return (
    <Box component="svg" width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill='none' {...other}>
      <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

export default memo(SearchIcon);
