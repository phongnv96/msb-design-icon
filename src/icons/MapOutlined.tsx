// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import MapOutlinedSvg from '../../vendors/asn/MapOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MapOutlinedSvg} />;

MapOutlined.displayName = 'MapOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MapOutlined);