import { assignAttrsAtTag } from '..';
import { TransformFactory } from '../..';
import { includes } from 'ramda';

// version < antd@3.9
const OLD_ICON_NAMES = [
  'step-backward',
  'step-forward',
  'fast-backward',
  'fast-forward',
  'forward',
  'backward',
  'caret-up',
  'caret-down',
  'caret-left',
  'caret-right',
  'retweet',
  'swap-left',
  'loading-3-quarters',
  'coffee',
  'bars',
  'file-jpg',
  'inbox',
  'shopping-cart',
  'safety',
  'medium-workmark'
];

export const adjustViewBox: TransformFactory = assignAttrsAtTag('svg', ({ name }) => ({
  viewBox: includes(name, OLD_ICON_NAMES) ? '0 0 1024 1024' : '0 0 24 24'
}));
