// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyOutlinedSvg from '../../vendors/asn/CopyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyOutlinedSvg} />;

CopyOutlined.displayName = 'CopyOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyOutlined);