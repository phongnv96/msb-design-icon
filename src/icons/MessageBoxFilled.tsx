// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import MessageBoxFilledSvg from '../../vendors/asn/MessageBoxFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MessageBoxFilled = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={MessageBoxFilledSvg} />
);

MessageBoxFilled.displayName = 'MessageBoxFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MessageBoxFilled);
