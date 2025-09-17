import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function TOFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-88vt9ynkm" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-90n5wkrvw" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-nqzj7q1y3" />
          </mask>
          <path id="mantine-nqzj7q1y3" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-88vt9ynkm)">
          <use fill="#e31d1c" xlinkHref="#mantine-nqzj7q1y3" />
          <path fill="#f7fcff" d="M0 0h18v16H0z" mask="url(#mantine-90n5wkrvw)" />
          <path fill="#e31d1c" d="M12 2v4h4v4h-4v4H8v-4H4V6h4V2z" mask="url(#mantine-90n5wkrvw)" />
        </g>
      </svg>
    </Box>
  );
}
