import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function DKFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-134ib3pu2" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-u9o8gnv9d" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-li9pghnir" />
          </mask>
          <path id="mantine-li9pghnir" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-134ib3pu2)">
          <use fill="#c51918" xlinkHref="#mantine-li9pghnir" />
          <g fill="#f7fcff" mask="url(#mantine-u9o8gnv9d)">
            <path d="M10 0h4v10h18v4H14v10h-4V14H0v-4h10z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
