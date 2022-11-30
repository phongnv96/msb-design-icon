// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import UserCheckFilledSvg from '../../vendors/asn/UserCheckFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserCheckFilled = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={UserCheckFilledSvg} />
);

UserCheckFilled.displayName = 'UserCheckFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserCheckFilled);
