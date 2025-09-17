import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function JPFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-3ycytip2i" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-cmk7qmjq4" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-8o9uoofmx" />
          </mask>
          <path id="mantine-8o9uoofmx" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-3ycytip2i)">
          <use fill="#f7fcff" xlinkHref="#mantine-8o9uoofmx" />
          <circle cx="16" cy="12" r="7.5" fill="#e31d1c" mask="url(#mantine-cmk7qmjq4)" />
        </g>
      </svg>
    </Box>
  );
}
