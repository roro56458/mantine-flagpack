import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function INFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-ggukx8gzc" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-i9tcfdpvu" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-kkm5v6r79" />
          </mask>
          <path id="mantine-kkm5v6r79" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ggukx8gzc)">
          <use fill="#f7fcff" xlinkHref="#mantine-kkm5v6r79" />
          <path fill="#ff8c1a" d="M0 0h32v8H0z" mask="url(#mantine-i9tcfdpvu)" />
          <path fill="#5eaa22" d="M0 16h32v8H0z" mask="url(#mantine-i9tcfdpvu)" />
          <g fill="#3d58db" mask="url(#mantine-i9tcfdpvu)">
            <path
              fillRule="nonzero"
              d="M16 15a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 110-8 4 4 0 010 8z"
            />
            <path d="M15.994 12.86l-.57 3.121.331-3.155-1.427 2.834 1.207-2.934-2.167 2.316 1.984-2.475-2.732 1.613 2.602-1.816-3.076.777 3.007-1.009-3.17-.121 3.17-.12-3.007-1.01 3.076.777-2.602-1.815 2.732 1.612-1.984-2.475 2.167 2.316-1.207-2.934 1.427 2.834-.331-3.155.57 3.12.571-3.12-.331 3.155 1.427-2.834-1.207 2.934L18.62 8.98l-1.984 2.475 2.732-1.612-2.602 1.815 3.076-.777-3.007 1.01 3.17.12-3.17.121 3.007 1.01-3.076-.778 2.602 1.816-2.732-1.613 1.984 2.475-2.167-2.316 1.207 2.934-1.427-2.834.331 3.155z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
