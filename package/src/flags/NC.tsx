import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function NCFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-ixdc0ymp1" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ixdc0ymp1)">
          <path fill="#f50100" d="M22 0h10v24H22z" />
          <path fill="#2e42a5" d="M0 0h12v24H0z" />
          <path fill="#f7fcff" d="M10 0h12v24H10z" />
        </g>
      </svg>
    </Box>
  );
}
