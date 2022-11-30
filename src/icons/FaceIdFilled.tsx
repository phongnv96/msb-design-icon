// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import FaceIdFilledSvg from '../../vendors/asn/FaceIdFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FaceIdFilled = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={FaceIdFilledSvg} />
);

FaceIdFilled.displayName = 'FaceIdFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FaceIdFilled);
