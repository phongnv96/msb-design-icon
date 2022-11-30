// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import MailFilledSvg from '../../vendors/asn/MailFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailFilledSvg} />;

MailFilled.displayName = 'MailFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailFilled);