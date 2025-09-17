import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function PWFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-57mkfquyd" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-43v3620fy" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-2dsoki0za" />
          </mask>
          <path id="mantine-2dsoki0za" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-57mkfquyd)">
          <use fill="#61c6f0" xlinkHref="#mantine-2dsoki0za" />
          <circle cx="11.5" cy="11.5" r="6.5" fill="#fbcd17" mask="url(#mantine-43v3620fy)" />
        </g>
      </svg>
    </Box>
  );
}
