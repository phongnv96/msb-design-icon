// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import PrinterOutlinedSvg from '../../vendors/asn/PrinterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrinterOutlinedSvg} />;

PrinterOutlined.displayName = 'PrinterOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PrinterOutlined);