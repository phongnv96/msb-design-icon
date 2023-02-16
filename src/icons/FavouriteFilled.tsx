// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import FavouriteFilledSvg from '../../vendors/asn/FavouriteFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FavouriteFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FavouriteFilledSvg} />;

FavouriteFilled.displayName = 'FavouriteFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FavouriteFilled);