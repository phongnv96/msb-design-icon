// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import FullScreenOutlinedSvg from '../../vendors/asn/FullScreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullScreenOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FullScreenOutlinedSvg} />;

FullScreenOutlined.displayName = 'FullScreenOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FullScreenOutlined);