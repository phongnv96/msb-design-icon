// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionCircleFilledSvg from '../../vendors/asn/QuestionCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionCircleFilledSvg} />;

QuestionCircleFilled.displayName = 'QuestionCircleFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionCircleFilled);