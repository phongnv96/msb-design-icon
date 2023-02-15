// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import CoinOutlinedSvg from '../../vendors/asn/CoinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoinOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={CoinOutlinedSvg} />
);

CoinOutlined.displayName = 'CoinOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CoinOutlined);
