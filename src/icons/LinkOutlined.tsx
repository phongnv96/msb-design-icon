// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import LinkOutlinedSvg from '../../vendors/asn/LinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinkOutlinedSvg} />;

LinkOutlined.displayName = 'LinkOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LinkOutlined);