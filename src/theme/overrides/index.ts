import { Theme } from '@mui/material/styles';
import merge from 'lodash/merge';

import { cssBaseline } from './components/css-baseline';

export function componentsOverrides(theme: Theme) {
  const components = merge(cssBaseline(theme));

  return components;
}
