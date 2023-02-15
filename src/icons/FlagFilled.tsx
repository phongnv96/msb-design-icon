// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import FlagFilledSvg from '../../vendors/asn/FlagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagFilled = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={FlagFilledSvg} />
);

FlagFilled.displayName = 'FlagFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagFilled);
