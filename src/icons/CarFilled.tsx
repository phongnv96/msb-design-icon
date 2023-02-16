// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import CarFilledSvg from '../../vendors/asn/CarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarFilledSvg} />;

CarFilled.displayName = 'CarFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarFilled);