import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SBFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-v8xm6faq3" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-uy8myxgp7" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-9ztnlgn6x" />
          </mask>
          <path id="mantine-9ztnlgn6x" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-v8xm6faq3)">
          <use fill="#3d58db" xlinkHref="#mantine-9ztnlgn6x" />
          <path fill="#579d20" d="M0 24h32V0z" mask="url(#mantine-uy8myxgp7)" />
          <path
            fill="#feca00"
            fillRule="nonzero"
            d="M-.782 24.745l-1.804-2.496L33.675-1.954 35.48.542z"
            mask="url(#mantine-uy8myxgp7)"
          />
          <g fill="#f7fcff" mask="url(#mantine-uy8myxgp7)">
            <path d="M5.017 2.234l.573 1.602h1.353l-.998 1.09.5 1.525-1.428-.85-1.364.946.436-1.62-1.001-1.035 1.355-.056zm5.658 0l.573 1.602h1.354l-1 1.09.501 1.525-1.428-.85-1.364.946.436-1.62-1-1.035 1.355-.056z" />
            <path d="M5.017 8.234l.573 1.602h1.353l-.998 1.09.5 1.525-1.428-.85-1.364.946.436-1.62-1.001-1.035 1.355-.056zm5.658 0l.573 1.602h1.354l-1 1.09.501 1.525-1.428-.85-1.364.946.436-1.62-1-1.035 1.355-.056zM8.012 5.142l.573 1.602h1.353l-.999 1.09.5 1.525-1.427-.85-1.364.946.436-1.62L6.083 6.8l1.355-.056z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
