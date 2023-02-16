// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import MinusOutlinedSvg from '../../vendors/asn/MinusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusOutlinedSvg} />;

MinusOutlined.displayName = 'MinusOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusOutlined);