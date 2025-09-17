import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function LTFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-yhw1dx924" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ohpvumj8i" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-b378s5bzq" />
          </mask>
          <path id="mantine-b378s5bzq" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-yhw1dx924)">
          <use fill="#55ba07" xlinkHref="#mantine-b378s5bzq" />
          <path fill="#feca00" d="M0 0h32v8H0z" mask="url(#mantine-ohpvumj8i)" />
          <path fill="#c51918" d="M0 16h32v8H0z" mask="url(#mantine-ohpvumj8i)" />
        </g>
      </svg>
    </Box>
  );
}
