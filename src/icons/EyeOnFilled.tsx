// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeOnFilledSvg from '../../vendors/asn/EyeOnFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeOnFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeOnFilledSvg} />;

EyeOnFilled.displayName = 'EyeOnFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeOnFilled);