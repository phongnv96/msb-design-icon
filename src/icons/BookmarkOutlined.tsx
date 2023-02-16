// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import BookmarkOutlinedSvg from '../../vendors/asn/BookmarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookmarkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookmarkOutlinedSvg} />;

BookmarkOutlined.displayName = 'BookmarkOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookmarkOutlined);