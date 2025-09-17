import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CRFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-rdvvno5x5" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-cfxt1edow" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-rp9jlmow6" />
          </mask>
          <path id="mantine-rp9jlmow6" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-rdvvno5x5)">
          <use fill="#2e42a5" xlinkHref="#mantine-rp9jlmow6" />
          <path
            fill="#e31d1c"
            stroke="#f7fcff"
            strokeWidth="4"
            d="M-2 8h36v8H-2z"
            mask="url(#mantine-cfxt1edow)"
          />
        </g>
      </svg>
    </Box>
  );
}
