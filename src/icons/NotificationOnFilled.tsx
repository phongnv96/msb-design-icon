// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import NotificationOnFilledSvg from '../../vendors/asn/NotificationOnFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationOnFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationOnFilledSvg} />;

NotificationOnFilled.displayName = 'NotificationOnFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationOnFilled);