import { Theme } from '@mui/material/styles';
import merge from 'lodash/merge';

import { cssBaseline } from './components/css-baseline';
import { appBar } from './components/appbar';
import { container } from './components/container';

export function componentsOverrides(theme: Theme) {
  const components = merge(cssBaseline(theme), appBar(theme), container(theme));

  return components;
}