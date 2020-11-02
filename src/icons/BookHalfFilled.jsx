/**
 * PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 * Copyright © 2020 Pearson Education, Inc.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Pearson Education, Inc.  The intellectual and technical concepts contained
 * herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
 * patent applications, and are protected by trade secret or copyright law.
 * Dissemination of this information, reproduction of this material, and copying or distribution of this software
 * is strictly forbidden unless prior written permission is obtained
 * from Pearson Education, Inc.
 * */

/**
 * Book Half filled icon.
 * @file BookHalfFilled.jsx
 * @author Vinothkumar, Krishnamoorthi
 */

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const BookHalfFilled = (props) => (
  <SvgIcon
    viewBox="0 0 16 16"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <g
      fill="currentcolor"
      fillRule="evenodd"
    >
      <g
        fill="currentcolor"
      >
        <path
          d="M9.171 15.77c-.089.138-.244.23-.421.23h-1.5c-.177 0-.332-.092-.421-.23-1.11-.504-2.32-.77-3.556-.77H1c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1h2.273C4.962 1 6.603 1.497 8 2.414 9.396 1.497 11.038 1 12.727 1H15c.552 0 1 .448 1 1v12c0 .552-.448 1-1 1h-2.273c-1.236 0-2.446.266-3.556.77zM7 13.944V3.85C5.896 3.136 4.603 2.75 3.273 2.75H1.75v10.5h1.523c1.285 0 2.547.239 3.727.694zM9 3.85v10.093c1.18-.455 2.442-.694 3.727-.694h1.523V2.75h-1.523c-1.33 0-2.623.386-3.727 1.101z"
          transform="translate(-308 -1072) translate(292 466) translate(0 220) translate(0 180) translate(0 192) translate(16 13) translate(0 1)"
        />
        <path
          d="M6 12.68V4.629c-.683-.57-1.484-.879-2.307-.879H2.75v8.376h.943c.795 0 1.577.19 2.307.554z"
          transform="translate(-308 -1072) translate(292 466) translate(0 220) translate(0 180) translate(0 192) translate(16 13) translate(0 1)"
        />
      </g>
    </g>
  </SvgIcon>
);

export default BookHalfFilled;
