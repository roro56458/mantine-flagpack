import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function TKFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-vb74zaymu" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-2erhwu0ra" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-mlka9ud85" />
          </mask>
          <path id="mantine-mlka9ud85" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-vb74zaymu)">
          <use fill="#2e42a5" xlinkHref="#mantine-mlka9ud85" />
          <path
            fill="#f7fcff"
            d="M3.294 10.063l-.885.548.344-.92L2 8.995h.913L3.294 8l.292.995H4.5l-.659.696.323.92zm4-4l-.885.548.344-.92L6 4.995h.913L7.294 4l.292.995H8.5l-.659.696.323.92zm4 4l-.885.548.344-.92L10 8.995h.913L11.294 8l.292.995h.914l-.659.696.323.92zm-4 4l-.885.548.344-.92L6 12.995h.913L7.294 12l.292.995H8.5l-.659.696.323.92z"
            mask="url(#mantine-2erhwu0ra)"
          />
          <path
            fill="#feca00"
            d="M6.616 17.965l22.753.04.631.835-.63 1.16-22.754-.44-.306-.835zM24.842 5.463c-1.323 1.988-1.323 4.3 0 6.934 1.984 3.952 2.762 3.681 4.85 4.148H7.342c8.944-6.043 14.778-9.737 17.5-11.082z"
            mask="url(#mantine-2erhwu0ra)"
          />
        </g>
      </svg>
    </Box>
  );
}
