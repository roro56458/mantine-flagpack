import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function YEFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-sdw7ny2xo" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-96g870rb1" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-d19b4jymo" />
          </mask>
          <path id="mantine-d19b4jymo" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-sdw7ny2xo)">
          <use fill="#f7fcff" xlinkHref="#mantine-d19b4jymo" />
          <path fill="#e31d1c" d="M0 0h32v8H0z" mask="url(#mantine-96g870rb1)" />
          <path fill="#272727" d="M0 16h32v8H0z" mask="url(#mantine-96g870rb1)" />
        </g>
      </svg>
    </Box>
  );
}
