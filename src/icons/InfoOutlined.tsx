// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import InfoOutlinedSvg from '../../vendors/asn/InfoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoOutlinedSvg} />;

InfoOutlined.displayName = 'InfoOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoOutlined);