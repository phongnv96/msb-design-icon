// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import RightFilledSvg from '../../vendors/asn/RightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightFilledSvg} />;

RightFilled.displayName = 'RightFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RightFilled);