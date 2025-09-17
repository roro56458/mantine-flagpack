import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function UAFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-mi7fr9led" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-bgudi3dew" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-v89s86yxw" />
          </mask>
          <path id="mantine-v89s86yxw" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-mi7fr9led)">
          <use fill="#3195f9" xlinkHref="#mantine-v89s86yxw" />
          <path fill="#feca00" d="M0 12h32v12H0z" mask="url(#mantine-bgudi3dew)" />
        </g>
      </svg>
    </Box>
  );
}
