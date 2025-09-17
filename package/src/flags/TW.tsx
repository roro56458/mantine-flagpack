import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function TWFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-3r499qq65" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ptdextycm" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-kjlpb75e4" />
          </mask>
          <path id="mantine-kjlpb75e4" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-3r499qq65)">
          <use fill="#ef0000" xlinkHref="#mantine-kjlpb75e4" />
          <g mask="url(#mantine-ptdextycm)">
            <path fill="#2e42a5" d="M0 0h18v14H0z" />
            <path
              fill="#feffff"
              d="M10.211 1.6l.36 2.342 2.207-.86-.86 2.207 2.341.359-1.848 1.482 1.848 1.481-2.341.36.86 2.207-2.208-.86-.359 2.341-1.481-1.848-1.482 1.848-.359-2.341-2.207.86.86-2.208L3.2 8.611 5.049 7.13 3.2 5.648l2.342-.359-.86-2.207 2.207.86.359-2.342L8.73 3.449zM8.73 4.267a2.862 2.862 0 100 5.725 2.862 2.862 0 000-5.725zm0 .573a2.29 2.29 0 110 4.58 2.29 2.29 0 010-4.58z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
