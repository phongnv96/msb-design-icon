// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import DownFilledSvg from '../../vendors/asn/DownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownFilledSvg} />;

DownFilled.displayName = 'DownFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownFilled);