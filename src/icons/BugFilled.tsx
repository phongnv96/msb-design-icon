// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import BugFilledSvg from '../../vendors/asn/BugFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugFilledSvg} />;

BugFilled.displayName = 'BugFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BugFilled);