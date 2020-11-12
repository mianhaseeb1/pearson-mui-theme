import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * DrawerClose icon
 *
 * @file DrawerClose.jsx
 * @author Sam George
 */
const DrawerClose = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 23 24" {...props}>
    <path
      fill="currentcolor"
      d="M6.49516 5.70789C6.85694 5.29789 7.44449 5.29789 7.80627 5.70789C8.16894 6.11789 8.16894 6.78189
      7.80627 7.19189L4.75205 10.6499H16.4649C16.9769 10.6499 17.392 11.1199 17.392 11.6999C17.392
      12.2799 16.9769 12.7499 16.4649 12.7499H4.75116L7.80538 16.2079C8.16805 16.6179 8.16805 17.2819 7.80538
      17.6919C7.44361 18.1019 6.85605 18.1019 6.49427 17.6919L1.85605 12.4419C1.49427 12.0319 1.49427 11.3679
      1.85605 10.9579L6.49516 5.70789Z"
    />
    <path
      fill="currentcolor"
      d="M20.3337 1C21.3159 1 22.1114 1.895 22.1114 3V21C22.1114 22.105 21.3159 23 20.3337
      23H11.4448C10.4625 23 9.66699 22.105 9.66699 21V15H11.4448V21H20.3337V3H11.4448V9H9.66699V3C9.66699
      1.895 10.4625 1 11.4448 1H20.3337Z"
    />
  </SvgIcon>
);

export default DrawerClose;
