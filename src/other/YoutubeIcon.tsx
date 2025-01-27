// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import { AntdIconProps } from '../components/AntdIcon';
import Icon, { CustomIconComponentProps } from '../components/Icon';
const svg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.8333 8C21.8333 8 21.6667 6.58333 21 6C20.25 5.16667 19.4167 5.16667 19 5.16667C16.1667 5 12 5 12 5C12 5 7.83333 5 5 5.16667C4.58333 5.25 3.75 5.25 3 6C2.41667 6.58333 2.16667 8 2.16667 8C2.16667 8 2 9.58333 2 11.25V12.75C2 14.3333 2.16667 16 2.16667 16C2.16667 16 2.33333 17.4167 3 18C3.75 18.8333 4.75 18.75 5.16667 18.8333C6.75 19 12 19 12 19C12 19 16.1667 19 19 18.75C19.4167 18.6667 20.25 18.6667 21 17.9167C21.5833 17.3333 21.8333 15.9167 21.8333 15.9167C21.8333 15.9167 22 14.3333 22 12.6667V11.1667C22 9.58333 21.8333 8 21.8333 8ZM9.91667 14.5833V9L15.3333 11.8333L9.91667 14.5833Z"
      fill="#F04438"
    />
  </svg>
);
const YoutubeIcon = (props: Partial<CustomIconComponentProps>,  ref: React.MutableRefObject<HTMLSpanElement>) => (
  <Icon ref={ref} component={svg} {...props} />
);
YoutubeIcon.displayName = 'YoutubeIcon';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(YoutubeIcon);
