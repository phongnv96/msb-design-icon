// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import GiftOutlinedSvg from '../../vendors/asn/GiftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GiftOutlinedSvg} />;

GiftOutlined.displayName = 'GiftOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GiftOutlined);