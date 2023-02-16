// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import SortOutlinedSvg from '../../vendors/asn/SortOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortOutlinedSvg} />;

SortOutlined.displayName = 'SortOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SortOutlined);