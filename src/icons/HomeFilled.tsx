// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import HomeFilledSvg from '../../vendors/asn/HomeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomeFilledSvg} />;

HomeFilled.displayName = 'HomeFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomeFilled);