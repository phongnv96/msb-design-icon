// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import SettingFilledSvg from '../../vendors/asn/SettingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SettingFilledSvg} />;

SettingFilled.displayName = 'SettingFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SettingFilled);