import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SCFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-bh4cqklvg" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-sfiq095f1" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-wbzq1b3r8" />
          </mask>
          <path id="mantine-wbzq1b3r8" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-bh4cqklvg)">
          <use fill="#2e42a5" xlinkHref="#mantine-wbzq1b3r8" />
          <path fill="#ffd018" d="M0 23.997L16.151-2h16.151z" mask="url(#mantine-sfiq095f1)" />
          <path
            fill="#e31d1c"
            fillRule="nonzero"
            d="M0 23.997l34.463-12.999V-5.103z"
            mask="url(#mantine-sfiq095f1)"
          />
          <path
            fill="#f7fcff"
            fillRule="nonzero"
            d="M0 23.997l34.463-4.999v-8.101z"
            mask="url(#mantine-sfiq095f1)"
          />
          <path fill="#5eaa22" d="M0 23.997h34.463v-7.1z" mask="url(#mantine-sfiq095f1)" />
        </g>
      </svg>
    </Box>
  );
}
