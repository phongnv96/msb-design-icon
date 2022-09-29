// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import LockedFilledSvg from '../../vendors/asn/LockedFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockedFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockedFilledSvg} />;

LockedFilled.displayName = 'LockedFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LockedFilled);