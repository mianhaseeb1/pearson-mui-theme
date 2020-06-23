import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Bookmark outlined icon
 *
 * @file BookmarkOutlined.jsx
 * @author Sam George
 */
const BookmarkOutlined = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M18,3 L6,3 L6,19.7672659 L12,14.4127077 L18,19.7672659 L18,3
      Z M12,17.0933232 L5.66583691,22.7460971 C5.25377873,23.1138287
      4.62163425,23.0778949 4.25390268,22.6658367 C4.09037716,22.4825997
      4,22.2455937 4,22 L4,3 C4,1.8954305 4.8954305,1 6,1 L18,1 C19.1045695,1
      20,1.8954305 20,3 L20,22 C20,22.5522847 19.5522847,23 19,23 C18.754406,23
      18.5174001,22.9096228 18.3341631,22.7460973 L12,17.0933232 Z"
    />
  </SvgIcon>
);

export default BookmarkOutlined;
