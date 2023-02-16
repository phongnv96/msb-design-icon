// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import NoteOutlinedSvg from '../../vendors/asn/NoteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NoteOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NoteOutlinedSvg} />;

NoteOutlined.displayName = 'NoteOutlined';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NoteOutlined);