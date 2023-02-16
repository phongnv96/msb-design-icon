// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import HeartFilledSvg from '../../vendors/asn/HeartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartFilledSvg} />;

HeartFilled.displayName = 'HeartFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartFilled);