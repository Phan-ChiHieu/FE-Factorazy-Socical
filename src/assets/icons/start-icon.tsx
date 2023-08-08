import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function StarIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...other}
    >
      <g clip-path="url(#clip0_385_1001)">
        <path
          d="M9.9998 4.075L11.7248 7.5625L12.0123 8.1875L12.6373 8.28125L16.4873 8.8375L13.7498 11.525L13.2811 11.9812L13.3936 12.6062L14.0498 16.4375L10.6061 14.6313L9.9998 14.375L9.41855 14.6812L5.9748 16.4625L6.5998 12.6312L6.7123 12.0062L6.2498 11.525L3.4873 8.80625L7.3373 8.25L7.9623 8.15625L8.2498 7.53125L9.9998 4.075ZM9.9998 1.25L7.15605 7.0125L0.799805 7.93125L5.39981 12.4188L4.3123 18.75L9.9998 15.7625L15.6873 18.75L14.5998 12.4188L19.1998 7.9375L12.8436 7.0125L9.9998 1.25Z"
          fill="#35DEC1"
        />
      </g>
      <defs>
        <clipPath id="clip0_385_1001">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(StarIcon);
