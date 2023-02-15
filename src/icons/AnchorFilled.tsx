// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import AnchorFilledSvg from '../../vendors/asn/AnchorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AnchorFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AnchorFilledSvg} />;

AnchorFilled.displayName = 'AnchorFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AnchorFilled);