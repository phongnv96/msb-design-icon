// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import UsbOutlinedSvg from '../../vendors/asn/UsbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={UsbOutlinedSvg} />
);

UsbOutlined.displayName = 'UsbOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UsbOutlined);
