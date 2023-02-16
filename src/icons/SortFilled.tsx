// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import SortFilledSvg from '../../vendors/asn/SortFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortFilledSvg} />;

SortFilled.displayName = 'SortFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SortFilled);