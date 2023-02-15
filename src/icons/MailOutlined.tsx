// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import MailOutlinedSvg from '../../vendors/asn/MailOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailOutlined = (props: AntdIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <AntdIcon {...props} ref={ref} icon={MailOutlinedSvg} />
);

MailOutlined.displayName = 'MailOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailOutlined);
