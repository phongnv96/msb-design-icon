// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import TrustedFilledSvg from '../../vendors/asn/TrustedFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrustedFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrustedFilledSvg} />;

TrustedFilled.displayName = 'TrustedFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrustedFilled);