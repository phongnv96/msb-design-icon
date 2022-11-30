// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import UserPlusOutlinedSvg from '../../vendors/asn/UserPlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserPlusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserPlusOutlinedSvg} />;

UserPlusOutlined.displayName = 'UserPlusOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserPlusOutlined);