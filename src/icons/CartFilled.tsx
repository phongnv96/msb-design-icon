// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import CartFilledSvg from '../../vendors/asn/CartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CartFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CartFilledSvg} />;

CartFilled.displayName = 'CartFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CartFilled);