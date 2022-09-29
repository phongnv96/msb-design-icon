// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import LogInOutlinedSvg from '../../vendors/asn/LogInOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogInOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogInOutlinedSvg} />;

LogInOutlined.displayName = 'LogInOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogInOutlined);