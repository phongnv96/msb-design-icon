// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import CameraOnFilledSvg from '../../vendors/asn/CameraOnFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraOnFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CameraOnFilledSvg} />;

CameraOnFilled.displayName = 'CameraOnFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CameraOnFilled);