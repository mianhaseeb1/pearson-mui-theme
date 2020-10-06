import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for Copy Clipboard
 *
 * @author Praveen Punniyamoorthi
 */
const Copy = (props) => (
  <SvgIcon
    viewBox="0 0 16 18"
     // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 15V16C13 17.1046 12.1046 18 11 18H2C0.89543 18 0 17.1046 0 16V5C0 3.89543
      0.89543 3 2 3H3V2C3 0.89543 3.89543 0 5 0H11.5858C11.851 0 12.1054 0.105357
      12.2929 0.292893L15.7071 3.70711C15.8946 3.89464 16 4.149 16 4.41421V13C16 14.1046 15.1046
      15 14 15H13ZM11.25 15H5C3.89543 15 3 14.1046 3 13V4.75H2C1.86193 4.75 1.75
      4.86193 1.75 5V16C1.75 16.1381 1.86193 16.25 2 16.25H11C11.1381 16.25 11.25 16.1381
      11.25 16V15ZM14.25 13V5H12C11.4477 5 11 4.55228 11 4V1.75H5C4.86193 1.75 4.75 1.86193
      4.75 2V13C4.75 13.1381 4.86193 13.25 5 13.25H14C14.1381 13.25 14.25 13.1381 14.25 13Z"
      fill="currentcolor"
    />
  </SvgIcon>
);

export default Copy;
