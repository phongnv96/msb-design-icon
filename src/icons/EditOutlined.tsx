// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import EditOutlinedSvg from '../../vendors/asn/EditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EditOutlinedSvg} />;

EditOutlined.displayName = 'EditOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EditOutlined);