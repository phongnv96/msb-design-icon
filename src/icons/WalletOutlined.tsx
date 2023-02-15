// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import WalletOutlinedSvg from '../../vendors/asn/WalletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={WalletOutlinedSvg} />
);

WalletOutlined.displayName = 'WalletOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WalletOutlined);
