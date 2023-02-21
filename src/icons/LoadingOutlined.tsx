// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import LoadingOutlinedSvg from '../../vendors/asn/LoadingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoadingOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={LoadingOutlinedSvg} />
);

LoadingOutlined.displayName = 'LoadingOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LoadingOutlined);
