import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * An icon for Upload
 *
 * @author Praveen Punniyamoorthi
 */
const Upload = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      d={`M22,15 C22.5522847,15 23,15.4477153 23,16 L23,20 C23,21.6568542 21.6568542,23
      20,23 L4,23 C2.34314575,23 1,21.6568542 1,20 L1,16 C1,15.4477153 1.44771525,15 2,
      15 C2.55228475,15 3,15.4477153 3,16 L3,20 C3,20.5522847 3.44771525,21 4,21 L20,21
      C20.5522847,21 21,20.5522847 21,20 L21,16 C21,15.4477153 21.4477153,15 22,15 Z M12,
      0 C12.2559223,0 12.5118446,0.0976310729 12.7071068,0.292893219
      L17.7071068,5.29289322 C18.0976311,5.68341751 18.0976311,6.31658249
      17.7071068,6.70710678 C17.3165825,7.09763107 16.6834175,7.09763107
      16.2928932,6.70710678 L13,3.41421356 L13,15 C13,15.5522847
      12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 L11,3.41421356
      L7.70710678,6.70710678 C7.31658249,7.09763107 6.68341751,7.09763107
      6.29289322,6.70710678 C5.90236893,6.31658249 5.90236893,5.68341751
      6.29289322,5.29289322 L11.2928932,0.292893219 C11.4881554,0.0976310729
      11.7440777,0 12,0 Z`}
      fill="currentcolor"
    />
  </SvgIcon>
);

export default Upload;
