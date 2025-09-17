import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CHFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-x40a3dld7" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-tmu0gtada" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-0f8xitw8x" />
          </mask>
          <path id="mantine-0f8xitw8x" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-x40a3dld7)">
          <use fill="#e31d1c" xlinkHref="#mantine-0f8xitw8x" />
          <path
            fill="#f1f9ff"
            d="M18 6v4h4v4h-4v4h-4v-4h-4v-4h4V6z"
            mask="url(#mantine-tmu0gtada)"
          />
        </g>
      </svg>
    </Box>
  );
}
