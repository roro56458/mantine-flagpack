import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CZFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-6ev2kcgz3" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-94z6zmdh6" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-zgyrurper" />
          </mask>
          <path id="mantine-zgyrurper" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-6ev2kcgz3)">
          <use fill="#e31d1c" xlinkHref="#mantine-zgyrurper" />
          <path fill="#f7fcff" d="M0-2h32v14H0z" mask="url(#mantine-94z6zmdh6)" />
          <path fill="#3d58db" d="M0 0v24l18-12z" />
        </g>
      </svg>
    </Box>
  );
}
