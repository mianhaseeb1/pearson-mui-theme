import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const AddIcon = props => (
  <SvgIcon
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      d={`M10,8 L14,8 C14.5522847,8 15,8.44771525 15,9 C15,9.55228475 14.5522847,10 14,10 L10,10 L10,14 C10,14.5522847 
      9.55228475,15 9,15 C8.44771525,15 8,14.5522847 8,14 L8,10 L4,10 C3.44771525,10 3,9.55228475 3,9 C3,8.44771525 
      3.44771525,8 4,8 L8,8 L8,4 C8,3.44771525 8.44771525,3 9,3 C9.55228475,3 10,3.44771525 10,4 L10,8 Z`}
      fill="currentcolor"
    />
  </SvgIcon>
);

export default AddIcon;
