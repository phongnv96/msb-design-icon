// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import BankFilledSvg from '../../vendors/asn/BankFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankFilledSvg} />;

BankFilled.displayName = 'BankFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BankFilled);