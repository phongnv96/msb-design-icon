// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import CameraOnOutlinedSvg from '../../vendors/asn/CameraOnOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraOnOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CameraOnOutlinedSvg} />;

CameraOnOutlined.displayName = 'CameraOnOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CameraOnOutlined);