// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import SendFilledSvg from '../../vendors/asn/SendFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SendFilledSvg} />;

SendFilled.displayName = 'SendFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SendFilled);