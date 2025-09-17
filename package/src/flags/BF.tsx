import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function BFFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-80vvguvkg" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-q99elc02b" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-vlgszsanl" />
          </mask>
          <path id="mantine-vlgszsanl" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-80vvguvkg)">
          <use fill="#5eaa22" xlinkHref="#mantine-vlgszsanl" />
          <path fill="#c51918" d="M0 0h32v12H0z" mask="url(#mantine-q99elc02b)" />
          <path
            fill="#feca00"
            d="M16.035 15.77l-4.703 3.56 1.505-5.797-4.41-3.53h5.257l2.35-5.145 2.352 5.146h5.257l-4.457 3.534 1.551 5.792z"
            mask="url(#mantine-q99elc02b)"
          />
        </g>
      </svg>
    </Box>
  );
}
