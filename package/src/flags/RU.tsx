import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function RUFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-w4tmxgvbc" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-42d1m7vhh" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-lf54bibtw" />
          </mask>
          <path id="mantine-lf54bibtw" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-w4tmxgvbc)">
          <use fill="#3d58db" xlinkHref="#mantine-lf54bibtw" />
          <path fill="#f7fcff" d="M0 0h32v8H0z" mask="url(#mantine-42d1m7vhh)" />
          <path fill="#c51918" d="M0 16h32v8H0z" mask="url(#mantine-42d1m7vhh)" />
        </g>
      </svg>
    </Box>
  );
}
