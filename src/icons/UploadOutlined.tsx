// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import UploadOutlinedSvg from '../../vendors/asn/UploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UploadOutlinedSvg} />;

UploadOutlined.displayName = 'UploadOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UploadOutlined);