// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import AirplaneFilledSvg from '../../vendors/asn/AirplaneFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AirplaneFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AirplaneFilledSvg} />;

AirplaneFilled.displayName = 'AirplaneFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AirplaneFilled);