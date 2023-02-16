// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import PhoneOutlinedSvg from '../../vendors/asn/PhoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PhoneOutlinedSvg} />;

PhoneOutlined.displayName = 'PhoneOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PhoneOutlined);