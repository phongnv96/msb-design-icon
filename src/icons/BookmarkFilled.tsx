// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import BookmarkFilledSvg from '../../vendors/asn/BookmarkFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookmarkFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookmarkFilledSvg} />;

BookmarkFilled.displayName = 'BookmarkFilled';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookmarkFilled);