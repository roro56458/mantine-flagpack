import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SLFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-nplghdhvb" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-t83usk1ji" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-3r67embcc" />
          </mask>
          <path id="mantine-3r67embcc" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-nplghdhvb)">
          <use fill="#f7fcff" xlinkHref="#mantine-3r67embcc" />
          <path fill="#78d843" d="M0 0h32v8H0z" mask="url(#mantine-t83usk1ji)" />
          <path fill="#3d58db" d="M0 16h32v8H0z" mask="url(#mantine-t83usk1ji)" />
        </g>
      </svg>
    </Box>
  );
}
