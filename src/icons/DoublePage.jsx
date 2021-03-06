import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Double page icon
 *
 * @file DoublePage.jsx
 * @author Sam George
 */
const DoublePage = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M3.938 4c-.193 0-.378.077-.515.213l-3.21 3.21C.077 7.56 0 7.745 0
      7.938v10.244C0 19.186.814 20 1.818 20h7.566c1.004 0 1.818-.814
      1.818-1.818V5.818C11.202 4.814 10.388 4 9.384 4H3.938zm.426 1.455h5.02c.178
      0 .327.128.358.298l.005.065v12.364c0 .178-.128.327-.298.358l-.065.005H1.818c-.178
      0-.327-.128-.358-.298l-.005-.065V8.364h2.181c.373 0
      .68-.281.723-.643l.005-.085V5.455zM20.064 4c.193 0 .378.077.515.213l3.21
      3.21c.136.137.213.322.213.515v10.244c0 1.004-.814 1.818-1.818 1.818h-7.566c-1.004
      0-1.818-.814-1.818-1.818V5.818C12.8 4.814 13.614 4 14.618 4h5.446zm-.426
      1.455h-5.02c-.178 0-.327.128-.358.298l-.005.065v12.364c0
      .178.128.327.298.358l.065.005h7.566c.178 0 .327-.128.358-.298l.005-.065V8.364h-2.181c-.373
      0-.68-.281-.723-.643l-.005-.085V5.455z"
    />
  </SvgIcon>
);

export default DoublePage;
