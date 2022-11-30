// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import CheckedFilledSvg from '../../vendors/asn/CheckedFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckedFilled = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={CheckedFilledSvg} />
);

CheckedFilled.displayName = 'CheckedFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckedFilled);
