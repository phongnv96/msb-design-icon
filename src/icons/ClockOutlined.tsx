// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import ClockOutlinedSvg from '../../vendors/asn/ClockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClockOutlinedSvg} />;

ClockOutlined.displayName = 'ClockOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClockOutlined);