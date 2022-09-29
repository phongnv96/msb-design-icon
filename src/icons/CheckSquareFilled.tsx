// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckSquareFilledSvg from '../../vendors/asn/CheckSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckSquareFilledSvg} />;

CheckSquareFilled.displayName = 'CheckSquareFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckSquareFilled);