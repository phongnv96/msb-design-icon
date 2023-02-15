// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import MapPinFilledSvg from '../../vendors/asn/MapPinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MapPinFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MapPinFilledSvg} />;

MapPinFilled.displayName = 'MapPinFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MapPinFilled);