// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseOutlinedSvg from '../../vendors/asn/CloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseOutlinedSvg} />;

CloseOutlined.displayName = 'CloseOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseOutlined);