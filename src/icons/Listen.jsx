import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * Listen(audio) icon
 *
 * @file Listen.jsx
 * @author Sam George
 */
const Listen = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentcolor"
      d="M13,1 C17.418278,1 21,4.581722 21,9 L21,11.684544 C22.7864764,12.6506437
      24,14.5407479 24,16.7142857 L24,17.2857143 C24,20.4416271 21.4416271,23 18.2857143,23
      L18,23 C16.8954305,23 16,22.1045695 16,21 L16,13 C16,11.8954305 16.8954305,11 18,11
      L18.2857143,11 C18.5276145,11 18.7660041,11.015031 19,11.0442098 L19,9 C19,5.6862915
      16.3137085,3 13,3 L11,3 C7.6862915,3 5,5.6862915 5,9 L5,11.0442098 C5.23399589,11.015031
      5.47238547,11 5.71428571,11 L6,11 C7.1045695,11 8,11.8954305 8,13 L8,21 C8,22.1045695
      7.1045695,23 6,23 L5.71428571,23 C2.55837286,23 0,20.4416271 0,17.2857143 L0,16.7142857
      C0,14.5407479 1.21352361,12.6506437 3,11.684544 L3,9 C3,4.581722 6.581722,1 11,1 L13,1
      Z M18.2857143,13 L18,13 L18,21 L18.2857143,21 C20.3370576,21 22,19.3370576 22,17.2857143
      L22,16.7142857 C22,14.6629424 20.3370576,13 18.2857143,13 Z M6,13 L5.71428571,13
      C3.66294236,13 2,14.6629424 2,16.7142857 L2,17.2857143 C2,19.3370576 3.66294236,21
      5.71428571,21 L6,21 L6,13 Z"
    />
  </SvgIcon>
);

export default Listen;
