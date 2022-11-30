// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import UserFilledSvg from '../../vendors/asn/UserFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserFilled = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={UserFilledSvg} />
);

UserFilled.displayName = 'UserFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserFilled);
