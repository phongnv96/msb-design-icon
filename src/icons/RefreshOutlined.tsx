// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import RefreshOutlinedSvg from '../../vendors/asn/RefreshOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RefreshOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RefreshOutlinedSvg} />;

RefreshOutlined.displayName = 'RefreshOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RefreshOutlined);