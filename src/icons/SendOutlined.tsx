// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import SendOutlinedSvg from '../../vendors/asn/SendOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={SendOutlinedSvg} />
);

SendOutlined.displayName = 'SendOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SendOutlined);
