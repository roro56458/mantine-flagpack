import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MCFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-7dp4ysoo8" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-nd9ll3l6w" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-zehbedj2l" />
          </mask>
          <path id="mantine-zehbedj2l" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-7dp4ysoo8)">
          <use fill="#f7fcff" xlinkHref="#mantine-zehbedj2l" />
          <path fill="#c51918" d="M0 0h32v12H0z" mask="url(#mantine-nd9ll3l6w)" />
        </g>
      </svg>
    </Box>
  );
}
