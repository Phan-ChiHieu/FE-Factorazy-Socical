
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import PopoverNav from '../popover-location';
import ConfigHeader from '../config-header';

export default function HeaderDesktop() {
  const title_header = ConfigHeader();
  return (
    <>
      <Typography
        variant="subtitle2"
        component={Link}
        href={title_header.manufacturing.href}
        color="#fff"
        position="relative"
        pr="18px"
        textTransform="uppercase"
      >
        {title_header.manufacturing.value}
      </Typography>
      <Stack direction="row" gap="14px">
        <PopoverNav />
        <Typography
          variant="subtitle2"
          component={Link}
          href={title_header.signIn.href}
          color='#fff'
          position="relative"
          sx={{
            padding: '10px 0px',
            borderRadius: '8px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            '&:hover': {
              color: '#5DFBDD',
            },
          }}
        >
          {title_header.signIn.value}
        </Typography>

        <Typography
          variant="subtitle2"
          component={Link}
          href={title_header.register.href}
          color="#fff"
          position="relative"
          sx={{
            padding: '10px 16px',
            border: '1px solid #D0D5DD',
            borderRadius: '8px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            transition: 'all 0.2s ease',
            '&:hover': {
              border: '1px solid #32DAC3',
              background: '#32DAC3',
              color: '#000',
            },
          }}
        >
          {title_header.register.value}
        </Typography>
      </Stack>
    </>
  );
}
