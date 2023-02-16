// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import BugOutlinedSvg from '../../vendors/asn/BugOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugOutlinedSvg} />;

BugOutlined.displayName = 'BugOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BugOutlined);