// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import HistoryOutlinedSvg from '../../vendors/asn/HistoryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HistoryOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HistoryOutlinedSvg} />;

HistoryOutlined.displayName = 'HistoryOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HistoryOutlined);