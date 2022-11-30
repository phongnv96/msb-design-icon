// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import CarOutlinedSvg from '../../vendors/asn/CarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={CarOutlinedSvg} />
);

CarOutlined.displayName = 'CarOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarOutlined);
