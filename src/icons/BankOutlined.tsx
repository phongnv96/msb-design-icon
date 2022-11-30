// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import BankOutlinedSvg from '../../vendors/asn/BankOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankOutlinedSvg} />;

BankOutlined.displayName = 'BankOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BankOutlined);