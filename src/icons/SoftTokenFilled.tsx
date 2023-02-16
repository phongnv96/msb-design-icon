// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import SoftTokenFilledSvg from '../../vendors/asn/SoftTokenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoftTokenFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SoftTokenFilledSvg} />;

SoftTokenFilled.displayName = 'SoftTokenFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SoftTokenFilled);