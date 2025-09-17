import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function COFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-wjesocw1y" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-0catvob3p" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-looszk61n" />
          </mask>
          <path id="mantine-looszk61n" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-wjesocw1y)">
          <use fill="#2e42a5" xlinkHref="#mantine-looszk61n" />
          <path fill="#feca00" d="M0 0h32v12H0z" mask="url(#mantine-0catvob3p)" />
          <path fill="#e31d1c" d="M0 18h32v6H0z" mask="url(#mantine-0catvob3p)" />
        </g>
      </svg>
    </Box>
  );
}
