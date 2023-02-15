// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import ClipboardOutlinedSvg from '../../vendors/asn/ClipboardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClipboardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClipboardOutlinedSvg} />;

ClipboardOutlined.displayName = 'ClipboardOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClipboardOutlined);