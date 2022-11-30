// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import StockOutlinedSvg from '../../vendors/asn/StockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StockOutlinedSvg} />;

StockOutlined.displayName = 'StockOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StockOutlined);