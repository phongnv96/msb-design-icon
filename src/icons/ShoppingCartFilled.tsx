// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingCartFilledSvg from '../../vendors/asn/ShoppingCartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingCartFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingCartFilledSvg} />;

ShoppingCartFilled.displayName = 'ShoppingCartFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingCartFilled);