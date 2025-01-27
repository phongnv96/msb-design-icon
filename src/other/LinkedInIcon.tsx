// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import * as React from 'react';
import { AntdIconProps } from '../components/AntdIcon';
import Icon, { CustomIconComponentProps } from '../components/Icon';
const svg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.1667 2H2.83333C2.33333 2 2 2.33333 2 2.83333V21.1667C2 21.6667 2.33333 22 2.83333 22H21.1667C21.6667 22 22 21.6667 22 21.1667V2.83333C22 2.33333 21.6667 2 21.1667 2ZM7.91667 19.0833H5V9.5H8V19.0833H7.91667ZM6.41667 8.16667C5.5 8.16667 4.66667 7.41667 4.66667 6.41667C4.66667 5.5 5.41667 4.66667 6.41667 4.66667C7.33333 4.66667 8.16667 5.41667 8.16667 6.41667C8.16667 7.41667 7.41667 8.16667 6.41667 8.16667ZM19.0833 19.0833H16.0833V14.4167C16.0833 13.3333 16.0833 11.9167 14.5833 11.9167C13 11.9167 12.8333 13.0833 12.8333 14.3333V19.0833H9.83333V9.5H12.6667V10.8333C13.0833 10.0833 14 9.33333 15.5 9.33333C18.5 9.33333 19.0833 11.3333 19.0833 13.9167V19.0833Z"
      fill="#2E90FA"
    />
  </svg>
);
const LinkedInIcon = (props: Partial<CustomIconComponentProps>,  ref: React.MutableRefObject<HTMLSpanElement>) => (
  <Icon ref={ref} component={svg} {...props} />
);
LinkedInIcon.displayName = 'LinkedInIcon';
/*
 *  temporary disable this rule for build
 */
// @ts-ignore
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LinkedInIcon);
