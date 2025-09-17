import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function NEFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-du1oozflw" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-pq57j1882" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-3xysyr4i0" />
          </mask>
          <path id="mantine-3xysyr4i0" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-du1oozflw)">
          <use fill="#f7fcff" xlinkHref="#mantine-3xysyr4i0" />
          <path fill="#fc6500" d="M0 0h32v8H0z" mask="url(#mantine-pq57j1882)" />
          <path fill="#5eaa22" d="M0 16h32v8H0z" mask="url(#mantine-pq57j1882)" />
          <circle cx="16" cy="12" r="4" fill="#fc6500" mask="url(#mantine-pq57j1882)" />
        </g>
      </svg>
    </Box>
  );
}
