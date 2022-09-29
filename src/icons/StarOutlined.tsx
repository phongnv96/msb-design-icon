// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import StarOutlinedSvg from '../../vendors/asn/StarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarOutlinedSvg} />;

StarOutlined.displayName = 'StarOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StarOutlined);