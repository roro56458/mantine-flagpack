import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GYFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-05p0t420b" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-05p0t420b)">
          <path fill="#5eaa22" d="M0 0h32v24H0z" />
          <g strokeWidth="2">
            <path fill="#feca00" stroke="#f7fcff" d="M1 1.413L30.995 12 1 22.587z" />
            <path fill="#e11c1b" stroke="#272727" d="M-1 .045L14.371 12-1 23.955z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
