'use client'

import { memo } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';
import { useResponsive } from '@/hooks/use-responsive';

// ----------------------------------------------------------------------

function LogoIcon({ width = '312px', height = '128px', ...other }: BoxProps) {
  const smUp = useResponsive('up', 'sm');

  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={smUp ? '312px' : '158px'}
      height={smUp ? '128px' : '72px'}
      viewBox="0 0 312 129"
      fill="none"
      {...other}
    >
      <path
        d="M148.78 14.0291L6.88388 57.5349C4.57579 58.2426 3 60.3739 3 62.788V120.505C3 123.54 5.45999 126 8.49452 126H303.366C306.401 126 308.861 123.54 308.861 120.505V8.47069C308.861 4.76473 305.267 2.1216 301.729 3.22569L163.017 46.5174C159.479 47.6215 155.885 44.9783 155.885 41.2724V19.2823C155.885 15.5878 152.312 12.9462 148.78 14.0291Z"
        stroke="url(#paint0_linear_478_8301)"
        strokeWidth="5.49451"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M264.237 98.3903L254.963 77.5337C254.906 77.4104 254.807 77.3447 254.676 77.3447H248.457C248.342 77.3447 248.252 77.394 248.186 77.4926C248.121 77.5912 248.112 77.6897 248.162 77.7965L261.067 106.621C261.108 106.72 261.108 106.827 261.067 106.925L256.754 116.479C256.705 116.586 256.713 116.684 256.779 116.783C256.844 116.881 256.935 116.931 257.05 116.931H263.276C263.408 116.931 263.515 116.865 263.564 116.742L281.143 77.8047C281.192 77.698 281.184 77.5994 281.118 77.5008C281.053 77.4022 280.962 77.3529 280.847 77.3529H274.621C274.489 77.3529 274.382 77.4187 274.333 77.5419L264.919 98.3986C264.853 98.5382 264.73 98.6204 264.582 98.6204C264.435 98.6204 264.303 98.5382 264.246 98.3986L264.237 98.3903Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M228.966 101.167L244.836 77.8458C244.902 77.7472 244.91 77.624 244.853 77.5172C244.795 77.4104 244.697 77.3447 244.574 77.3447H217.761C217.589 77.3447 217.441 77.4844 217.441 77.6651V83.3413C217.441 83.5138 217.581 83.6617 217.761 83.6617H232.539C232.679 83.6617 232.802 83.7356 232.868 83.8588C232.934 83.9821 232.925 84.1217 232.843 84.2449L216.973 107.566C216.899 107.673 216.899 107.788 216.956 107.895C217.014 108.001 217.112 108.067 217.236 108.067H244.048C244.22 108.067 244.368 107.927 244.368 107.747V102.07C244.368 101.898 244.229 101.75 244.048 101.75H229.27C229.13 101.75 229.007 101.676 228.941 101.553C228.876 101.43 228.884 101.29 228.966 101.167Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M195.483 77.4679C187.547 78.4455 181.592 85.2142 181.592 93.1988C181.592 101.183 187.547 107.952 195.483 108.93C196.132 109.012 196.789 109.053 197.446 109.053C198.103 109.053 198.76 109.012 199.409 108.93C200.83 108.757 202.218 108.387 203.533 107.837C203.656 107.788 203.73 107.681 203.73 107.541V101.068C203.73 100.937 203.664 100.838 203.549 100.781C203.434 100.723 203.319 100.731 203.212 100.814C201.98 101.75 200.543 102.366 199.015 102.621C198.497 102.711 197.963 102.752 197.438 102.752C196.912 102.752 196.378 102.711 195.86 102.621L195.729 102.596C191.186 101.783 187.876 97.7989 187.876 93.1823C187.876 88.5658 191.252 84.516 195.86 83.7521C196.378 83.6617 196.912 83.6206 197.438 83.6206C197.963 83.6206 198.497 83.6617 199.015 83.7521L199.138 83.7767C203.689 84.5899 206.999 88.574 206.999 93.1906V108.223C206.999 108.396 207.139 108.544 207.32 108.544H212.971C213.144 108.544 213.292 108.404 213.292 108.223V93.1988C213.292 85.2142 207.336 78.4455 199.401 77.4679C198.752 77.3858 198.095 77.3447 197.438 77.3447C196.78 77.3447 196.123 77.3858 195.474 77.4679H195.483Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M161.056 107.837C161.056 108.01 161.195 108.157 161.376 108.157H167.028C167.2 108.157 167.348 108.018 167.348 107.837V93.5109C167.348 93.4041 167.348 93.3056 167.348 93.1988C167.348 92.673 167.389 92.1391 167.479 91.6216C168.243 87.0132 172.244 83.6371 176.91 83.6371H177.937C178.109 83.6371 178.257 83.4974 178.257 83.3167V77.6651C178.257 77.4926 178.117 77.3447 177.937 77.3447H176.91C168.925 77.3447 162.156 83.3003 161.179 91.2355C161.097 91.8844 161.056 92.5416 161.056 93.1988C161.056 93.2973 161.056 93.3959 161.056 93.4945V107.837Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.624 77.4679C131.689 78.4455 125.733 85.2142 125.733 93.1988C125.733 101.183 131.689 107.952 139.624 108.93C140.273 109.012 140.93 109.053 141.587 109.053C142.245 109.053 142.902 109.012 143.551 108.93C151.486 107.952 157.441 101.183 157.441 93.1988C157.441 85.2142 151.486 78.4455 143.551 77.4679C142.902 77.3858 142.245 77.3447 141.587 77.3447C140.93 77.3447 140.273 77.3858 139.624 77.4679ZM143.288 83.7849C147.839 84.5982 151.149 88.5822 151.149 93.1988C151.149 97.8153 147.773 101.865 143.165 102.629C142.647 102.719 142.113 102.76 141.587 102.76C141.062 102.76 140.528 102.719 140.01 102.629L139.879 102.604C135.336 101.791 132.026 97.8071 132.026 93.1906C132.026 88.574 135.402 84.5242 140.01 83.7603C140.528 83.6699 141.062 83.6288 141.587 83.6288C142.113 83.6288 142.647 83.6699 143.165 83.7603L143.288 83.7849Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.597 102.67V85.3123C115.597 85.107 115.761 84.9427 115.967 84.9427H121.38C121.553 84.9427 121.7 84.803 121.7 84.6223V78.9461C121.7 78.7736 121.561 78.6257 121.38 78.6257H115.967C115.761 78.6257 115.597 78.4614 115.597 78.2561V70.2715C115.597 70.099 115.457 69.9512 115.277 69.9512H109.625C109.453 69.9512 109.305 70.0908 109.305 70.2715V104.395C109.305 107.114 111.523 109.34 114.25 109.34H121.38C121.553 109.34 121.7 109.2 121.7 109.019V103.368C121.7 103.195 121.561 103.048 121.38 103.048H115.967C115.761 103.048 115.597 102.883 115.597 102.678V102.67Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.5208 94.776C84.4305 94.2584 84.3894 93.7245 84.3894 93.1988C84.3894 92.673 84.4305 92.1391 84.5208 91.6216C85.2848 87.0132 89.2853 83.6371 93.9511 83.6371C96.4976 83.6371 98.9127 84.6392 100.712 86.4382L101.435 87.1611C101.558 87.2843 101.763 87.2843 101.886 87.1611L105.879 83.1606C106.002 83.0374 106.002 82.832 105.879 82.7088L105.156 81.9859C102.174 79.0041 98.1652 77.3447 93.9429 77.3447C85.9584 77.3447 79.1896 83.3003 78.2121 91.2355C78.1299 91.8844 78.0889 92.5416 78.0889 93.1988C78.0889 93.8559 78.1299 94.5131 78.2121 95.162C79.1896 103.089 85.9584 109.053 93.9429 109.053C98.157 109.053 102.174 107.393 105.156 104.412L105.879 103.689C106.002 103.566 106.002 103.36 105.879 103.237L101.886 99.2364C101.763 99.1132 101.558 99.1132 101.435 99.2364L100.712 99.9593C98.9127 101.758 96.4976 102.76 93.9511 102.76C89.2853 102.76 85.2848 99.3843 84.5208 94.776Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.6574 77.4679C48.7221 78.4455 42.7666 85.2142 42.7666 93.1988C42.7666 101.183 48.7221 107.952 56.6574 108.93C57.3063 109.012 57.9635 109.053 58.6206 109.053C59.2778 109.053 59.935 109.012 60.5839 108.93C62.005 108.757 63.3933 108.387 64.7076 107.837C64.8308 107.788 64.9048 107.681 64.9048 107.541V101.068C64.9048 100.937 64.839 100.838 64.724 100.781C64.609 100.723 64.494 100.731 64.3872 100.814C63.1551 101.75 61.7175 102.366 60.1896 102.621C59.6721 102.711 59.1382 102.752 58.6124 102.752C58.0867 102.752 57.5528 102.711 57.0352 102.621L56.9038 102.596C52.3612 101.783 49.0507 97.7989 49.0507 93.1823C49.0507 88.5658 52.4269 84.516 57.0352 83.7521C57.5528 83.6617 58.0867 83.6206 58.6124 83.6206C59.1382 83.6206 59.6721 83.6617 60.1896 83.7521L60.3128 83.7767C64.8637 84.5899 68.1741 88.574 68.1741 93.1906V108.223C68.1741 108.396 68.3138 108.544 68.4945 108.544H74.1461C74.3186 108.544 74.4665 108.404 74.4665 108.223V93.1988C74.4665 85.2142 68.5109 78.4455 60.5757 77.4679C59.9268 77.3858 59.2696 77.3447 58.6124 77.3447C57.9553 77.3447 57.2981 77.3858 56.6492 77.4679H56.6574Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2469 84.9594V109.053C22.2469 109.225 22.3865 109.373 22.5673 109.373H28.2189C28.3914 109.373 28.5392 109.233 28.5392 109.053V87.6784C28.5392 87.4731 28.7035 87.3088 28.9089 87.3088H39.1277C39.3003 87.3088 39.4481 87.1691 39.4481 86.9884V81.3368C39.4481 81.1643 39.3085 81.0165 39.1277 81.0165H29.6071C29.4757 81.0165 29.3689 80.959 29.295 80.8522C29.221 80.7454 29.2128 80.6222 29.2621 80.5072C30.7325 76.9421 34.2401 74.6009 38.1009 74.6009H39.1277C39.3003 74.6009 39.4481 74.4613 39.4481 74.2806V68.629C39.4481 68.4565 39.3085 68.3086 39.1277 68.3086H38.1009C30.1493 68.3086 23.4051 74.2148 22.3783 82.1008C22.3783 82.1419 22.3619 82.1747 22.3455 82.2076C22.329 82.2486 22.3208 82.2815 22.3126 82.3308L22.2633 83.3658C22.2633 83.3658 22.2633 83.3987 22.2633 83.4233C22.2633 83.5383 22.2551 83.6451 22.2551 83.7601C22.2551 83.7601 22.2551 83.7848 22.2551 83.8012L22.2305 84.7869C22.2305 84.7869 22.2305 84.8444 22.2387 84.8773C22.2387 84.9102 22.2469 84.9348 22.2469 84.9677V84.9594Z"
        fill="white"
      />
      <rect x="282.631" y="101.166" width="6.57162" height="6.57162" rx="3.28581" fill="white" />
      <defs>
        <linearGradient id="paint0_linear_478_8301" x1="155.93" y1="1" x2="155.93" y2="126" gradientUnits="userSpaceOnUse">
          <stop stopColor="#35DEC1" />
          <stop offset="1" stopColor="#35DEC1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Box>
  );
}

export default memo(LogoIcon);
