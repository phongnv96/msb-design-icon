// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import RightOutlinedSvg from '../../vendors/asn/RightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightOutlinedSvg} />;

RightOutlined.displayName = 'RightOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RightOutlined);