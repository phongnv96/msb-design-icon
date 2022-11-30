// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import ProtectedFilledSvg from '../../vendors/asn/ProtectedFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProtectedFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProtectedFilledSvg} />;

ProtectedFilled.displayName = 'ProtectedFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProtectedFilled);