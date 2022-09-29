// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import HomeOutlinedSvg from '../../vendors/asn/HomeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomeOutlinedSvg} />;

HomeOutlined.displayName = 'HomeOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomeOutlined);