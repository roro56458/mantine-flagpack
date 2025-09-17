import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function AWFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-makfk0ldp" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-238a87p51" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-vgvg70o6n" />
          </mask>
          <path id="mantine-vgvg70o6n" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-makfk0ldp)">
          <use fill="#5ba3da" xlinkHref="#mantine-vgvg70o6n" />
          <g mask="url(#mantine-238a87p51)">
            <path
              fill="red"
              stroke="#f7fcff"
              strokeWidth=".35"
              d="M5.773 7.96l-4.38-.925 4.434-.878 1.283-4.59L8.122 6.12l3.96.92-3.914.92-1.129 3.743z"
            />
            <path fill="#fad615" d="M32 18v2H0v-2zm0-4v2H0v-2z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
