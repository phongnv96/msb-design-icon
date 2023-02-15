// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import AirplaneOutlinedSvg from '../../vendors/asn/AirplaneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AirplaneOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AirplaneOutlinedSvg} />;

AirplaneOutlined.displayName = 'AirplaneOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AirplaneOutlined);