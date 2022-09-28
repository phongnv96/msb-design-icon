// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import ClockFilledSvg from '../../vendors/asn/ClockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClockFilledSvg} />;

ClockFilled.displayName = 'ClockFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClockFilled);