// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import GlobeOutlinedSvg from '../../vendors/asn/GlobeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobeOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={GlobeOutlinedSvg} />
);

GlobeOutlined.displayName = 'GlobeOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobeOutlined);
