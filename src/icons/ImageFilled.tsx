// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import ImageFilledSvg from '../../vendors/asn/ImageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImageFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ImageFilledSvg} />;

ImageFilled.displayName = 'ImageFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ImageFilled);