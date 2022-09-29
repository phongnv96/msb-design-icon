// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusOutlinedSvg from '../../vendors/asn/PlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusOutlinedSvg} />;

PlusOutlined.displayName = 'PlusOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusOutlined);