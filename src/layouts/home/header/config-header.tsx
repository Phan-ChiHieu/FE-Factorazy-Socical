import { useLocales } from '@/locales';
import { useMemo } from 'react';

export const HEADER = {
  H_MOBILE: 36,
  H_DESKTOP: 56,
};

export default function ConfigHeader() {
  const { t } = useLocales();

  const data = useMemo(() => {
    return {
      manufacturing: {
        value: t('manufacturing_channel'),
        href: '/dashboard',
      },
      signIn: {
        value: t('sign_in'),
        href: '/sign-in',
      },
      register: {
        value: t('sign_up'),
        href: '/sign-up',
      },
    };
  }, [t]);

  return data;
}
