// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import ShoppingCartOutlinedSvg from '../../vendors/asn/ShoppingCartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingCartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={ShoppingCartOutlinedSvg} />;

ShoppingCartOutlined.displayName = 'ShoppingCartOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingCartOutlined);
