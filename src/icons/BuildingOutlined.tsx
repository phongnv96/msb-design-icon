// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import BuildingOutlinedSvg from '../../vendors/asn/BuildingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BuildingOutlinedSvg} />;

BuildingOutlined.displayName = 'BuildingOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BuildingOutlined);