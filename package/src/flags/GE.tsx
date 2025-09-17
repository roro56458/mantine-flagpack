import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GEFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-id26kvk1e" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ncv78s622" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-io5u4999y" />
          </mask>
          <path id="mantine-io5u4999y" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-id26kvk1e)">
          <use fill="#f7fcff" xlinkHref="#mantine-io5u4999y" />
          <g fill="#e31d1c">
            <g mask="url(#mantine-ncv78s622)">
              <path d="M14 0h4v10h14v4H18v10h-4V14H0v-4h14z" />
            </g>
            <g mask="url(#mantine-ncv78s622)">
              <path d="M9.999 17.222L12.2 17v2c-1.468-.092-2.201-.125-2.201-.098 0 .026.067.726.201 2.098h-2l.16-2H6.2v-2l2.16.222L8.2 15h2zm0-12L12.2 5v2c-1.468-.092-2.201-.125-2.201-.098s.067.726.201 2.098h-2l.16-2H6.2V5l2.16.222L8.2 3h2zm14 0L26.2 5v2c-1.468-.092-2.201-.125-2.201-.098s.067.726.201 2.098h-2l.16-2H20.2V5l2.16.222L22.2 3h2zm0 12L26.2 17v2c-1.468-.092-2.201-.125-2.201-.098 0 .026.067.726.201 2.098h-2l.16-2H20.2v-2l2.16.222L22.2 15h2z" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
