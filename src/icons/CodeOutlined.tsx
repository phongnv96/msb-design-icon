// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import CodeOutlinedSvg from '../../vendors/asn/CodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeOutlinedSvg} />;

CodeOutlined.displayName = 'CodeOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeOutlined);