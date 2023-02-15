// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import AnchorOutlinedSvg from '../../vendors/asn/AnchorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AnchorOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AnchorOutlinedSvg} />;

AnchorOutlined.displayName = 'AnchorOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AnchorOutlined);