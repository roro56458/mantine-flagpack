import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MRFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-zicp2j1d8" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-vr5qkurg8" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-wtnad5stv" />
          </mask>
          <path id="mantine-wtnad5stv" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-zicp2j1d8)">
          <use fill="#1c7b4d" xlinkHref="#mantine-wtnad5stv" />
          <path fill="#e31d1c" d="M0 0h32v6H0zm0 18h32v6H0z" mask="url(#mantine-vr5qkurg8)" />
          <g fill="#feca00" mask="url(#mantine-vr5qkurg8)">
            <path d="M16.242 14.379c5.185.028 6.646-4.314 6.646-4.314-.294 3.715-2.349 6.234-6.646 6.234s-5.875-3.263-6.646-6.518c0 0 1.46 4.569 6.646 4.598z" />
            <path d="M17.637 9.814l.337 1.963-1.763-.927-1.764.927.337-1.963-1.427-1.534h1.972l.882-1.93.881 1.93h1.972z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
