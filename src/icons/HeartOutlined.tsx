// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartOutlinedSvg from '../../vendors/asn/HeartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartOutlinedSvg} />;

HeartOutlined.displayName = 'HeartOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartOutlined);