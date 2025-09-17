import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function FIFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-j1p9mj1sc" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-algi73r9z" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-s0m08u86x" />
          </mask>
          <path id="mantine-s0m08u86x" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-j1p9mj1sc)">
          <use fill="#f7fcff" xlinkHref="#mantine-s0m08u86x" />
          <g fill="#2e42a5" stroke="#2e42a5" strokeWidth="2" mask="url(#mantine-algi73r9z)">
            <path d="M13.818 1v9.323H33v4H13.818V25h-4V14.323H-1v-4H9.818V1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
