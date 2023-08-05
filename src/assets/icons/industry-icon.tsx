import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

function IndustryIcon({ ...other }: BoxProps) {
  return (
    <Box component="svg" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...other}>
      <g clipPath="url(#clip0_255_4476)">
        <path
          d="M22.1475 4.6125C22.0335 4.54667 21.9042 4.51202 21.7725 4.51202C21.6408 4.51202 21.5115 4.54667 21.3975 4.6125L15 7.785V5.25C14.9996 5.12215 14.9666 4.99653 14.904 4.88505C14.8414 4.77357 14.7513 4.67995 14.6423 4.61307C14.5334 4.54619 14.4091 4.50828 14.2814 4.50293C14.1537 4.49758 14.0267 4.52497 13.9125 4.5825L7.5 7.785V2.25C7.5 2.05109 7.42098 1.86032 7.28033 1.71967C7.13968 1.57902 6.94891 1.5 6.75 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V21H22.5V5.25C22.5003 5.12254 22.468 4.99712 22.4063 4.88558C22.3447 4.77404 22.2556 4.68005 22.1475 4.6125ZM16.5 19.5H13.5V14.25H16.5V19.5ZM21 19.5H18V13.5C18 13.3011 17.921 13.1103 17.7803 12.9697C17.6397 12.829 17.4489 12.75 17.25 12.75H12.75C12.5511 12.75 12.3603 12.829 12.2197 12.9697C12.079 13.1103 12 13.3011 12 13.5V19.5H3V3H6V10.215L13.5 6.465V10.215L21 6.465V19.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_255_4476">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(IndustryIcon);