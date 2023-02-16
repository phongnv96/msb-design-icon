// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import CalendarOutlinedSvg from '../../vendors/asn/CalendarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarOutlinedSvg} />;

CalendarOutlined.displayName = 'CalendarOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarOutlined);