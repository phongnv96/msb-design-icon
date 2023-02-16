// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import UnlockOutlinedSvg from '../../vendors/asn/UnlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnlockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnlockOutlinedSvg} />;

UnlockOutlined.displayName = 'UnlockOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UnlockOutlined);