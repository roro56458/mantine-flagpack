import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function BGFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-c0lm7jcu8" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-al405be30" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ajxxbu06u" />
          </mask>
          <path id="mantine-ajxxbu06u" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-c0lm7jcu8)">
          <use fill="#5eaa22" xlinkHref="#mantine-ajxxbu06u" />
          <path fill="#f7fcff" d="M0 0h32v8H0z" mask="url(#mantine-al405be30)" />
          <path fill="#e22c18" d="M0 16h32v8H0z" mask="url(#mantine-al405be30)" />
        </g>
      </svg>
    </Box>
  );
}
