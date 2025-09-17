import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function EHFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-8fi3ov2yh" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-8fi3ov2yh)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path fill="#272727" d="M0 0h32v8H0z" />
          <path fill="#5eaa22" d="M0 16h32v8H0z" />
          <path
            fill="#e31d1c"
            d="M0 0l16 12L0 24zm21.688 8.364s-2.275 1.195-2.275 3.467c0 2.271 2.275 3.646 2.275 3.646-1.051.296-4.549-.307-4.549-3.572s3.53-4.187 4.549-3.541zm3.024 2.508l-.397 1.225 1.176 1.148-1.555-.343-.298 1.587-.684-1.714-1.573-.512 1.28-.607-.456-1.584 1.324 1.24z"
          />
        </g>
      </svg>
    </Box>
  );
}
