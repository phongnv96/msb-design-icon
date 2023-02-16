// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import FaceIdOutlinedSvg from '../../vendors/asn/FaceIdOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FaceIdOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FaceIdOutlinedSvg} />;

FaceIdOutlined.displayName = 'FaceIdOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FaceIdOutlined);