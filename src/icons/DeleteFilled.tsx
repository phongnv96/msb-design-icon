// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteFilledSvg from '../../vendors/asn/DeleteFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteFilledSvg} />;

DeleteFilled.displayName = 'DeleteFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteFilled);