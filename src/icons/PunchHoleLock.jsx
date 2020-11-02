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
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Punch hole locked icon. This icon have rounded hole on the lock
 *
 * @author Vinothkumar, Krishnamoorthi
 * @file PunchHoleLock.jsx
 */
const PunchHoleLock = (props) => (
  <SvgIcon
    viewBox="0 0 16 16"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <g
      fill="currentcolor"
      fillRule="evenodd"
    >
      <path
        fill="currentcolor"
        d="M4 6V5c0-2.21 1.79-4 4-4s4 1.79 4 4v1h.5c.828 0 1.5.672 1.5 1.5v6c0 .828-.672 1.5-1.5 1.5h-9c-.828 0-1.5-.672-1.5-1.5v-6C2 6.672 2.672 6 3.5 6H4zm1.75 0h4.5V5c0-1.243-1.007-2.25-2.25-2.25S5.75 3.757 5.75 5v1zM7.5 9c-.276 0-.5.224-.5.5v2c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-2c0-.276-.224-.5-.5-.5h-1z"
        transform="translate(-296 -1248) translate(292 442) translate(0 320) translate(0 88) translate(0 384) translate(4 12) translate(0 2)"
      />
    </g>
  </SvgIcon>
);

export default PunchHoleLock;
