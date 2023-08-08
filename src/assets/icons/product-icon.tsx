import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function ProductIcon({ ...other }: BoxProps) {
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
      <g clip-path="url(#clip0_385_996)">
        <path d="M8.75 11.25H5V12.5H8.75V11.25Z" fill="#35DEC1" />
        <path d="M11.25 13.75H5V15H11.25V13.75Z" fill="#35DEC1" />
        <path
          d="M16.25 2.5H3.75C3.41861 2.50041 3.1009 2.63224 2.86657 2.86657C2.63224 3.1009 2.50041 3.41861 2.5 3.75V16.25C2.50041 16.5814 2.63224 16.8991 2.86657 17.1334C3.1009 17.3678 3.41861 17.4996 3.75 17.5H16.25C16.5814 17.4996 16.8991 17.3678 17.1334 17.1334C17.3678 16.8991 17.4996 16.5814 17.5 16.25V3.75C17.4996 3.41861 17.3678 3.1009 17.1334 2.86657C16.8991 2.63224 16.5814 2.50041 16.25 2.5ZM11.25 3.75V6.25H8.75V3.75H11.25ZM3.75 16.25V3.75H7.5V7.5H12.5V3.75H16.25L16.2507 16.25H3.75Z"
          fill="#35DEC1"
        />
      </g>
      <defs>
        <clipPath id="clip0_385_996">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(ProductIcon);
