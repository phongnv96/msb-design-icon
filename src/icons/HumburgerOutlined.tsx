// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import HumburgerOutlinedSvg from '../../vendors/asn/HumburgerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HumburgerOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={HumburgerOutlinedSvg} />
);

HumburgerOutlined.displayName = 'HumburgerOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HumburgerOutlined);
