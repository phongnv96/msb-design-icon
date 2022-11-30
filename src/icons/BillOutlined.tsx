// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import BillOutlinedSvg from '../../vendors/asn/BillOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={BillOutlinedSvg} />
);

BillOutlined.displayName = 'BillOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillOutlined);
