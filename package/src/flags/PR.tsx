import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function PRFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-gfgtyup9w" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-jllac4l6n" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ag9azqqwr" />
          </mask>
          <mask id="mantine-p0i6yea4t" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-88hp7bg2x" />
          </mask>
          <path id="mantine-ag9azqqwr" d="M0 0h32v24H0z" />
          <path id="mantine-88hp7bg2x" d="M0 0v24l18-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-gfgtyup9w)">
          <use fill="#ef0000" xlinkHref="#mantine-ag9azqqwr" />
          <path
            fill="#ef0000"
            stroke="#f7fcff"
            strokeWidth="4"
            d="M-2 8h36v8H-2z"
            mask="url(#mantine-jllac4l6n)"
          />
          <use fill="#3d58db" xlinkHref="#mantine-88hp7bg2x" />
          <g fill="#f7fcff" mask="url(#mantine-p0i6yea4t)">
            <path d="M6.688 14.217l-3.672 1.938 1.788-3.894-2.278-2.08 2.812-.104 1.35-3.52 1.03 3.52h2.808l-1.872 2.184 1.489 3.894z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
