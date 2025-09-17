import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function NAFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-th4f93jwe" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-f0wvbsurg" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-yunzqycl7" />
          </mask>
          <path id="mantine-yunzqycl7" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-th4f93jwe)">
          <use fill="#093" xlinkHref="#mantine-yunzqycl7" />
          <path fill="#3195f9" d="M0 0v24L32 0z" mask="url(#mantine-f0wvbsurg)" />
          <g mask="url(#mantine-f0wvbsurg)">
            <path
              fill="#e31d1c"
              fillRule="nonzero"
              stroke="#f7fcff"
              strokeWidth="2"
              d="M32.769-3.617l3.19 6.867L-.48 28.055l-3.842-6.959z"
            />
            <path
              fill="#feca00"
              d="M7.524 1.2l.313 2.045 1.928-.75-.751 1.927 2.045.314L9.445 6.03l1.614 1.294-2.045.313.751 1.928-1.928-.751-.313 2.045L6.23 9.245l-1.294 1.614-.314-2.045-1.928.751.751-1.928L1.4 7.324 3.015 6.03 1.4 4.736l2.045-.314-.75-1.928 1.927.751.314-2.045L6.23 2.815zM6.23 3.53a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 .5a2 2 0 110 4 2 2 0 010-4z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
