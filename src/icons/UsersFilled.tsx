// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import UsersFilledSvg from '../../vendors/asn/UsersFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsersFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UsersFilledSvg} />;

UsersFilled.displayName = 'UsersFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UsersFilled);