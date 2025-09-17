import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MHFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-hinib93ij" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-otwe700ys" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-1l38jc9es" />
          </mask>
          <path id="mantine-1l38jc9es" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-hinib93ij)">
          <use fill="#3d58db" xlinkHref="#mantine-1l38jc9es" />
          <path
            fill="#f7fcff"
            d="M8 11l-.817 2.944.008-3.055-1.581 2.614.831-2.94-2.228 2.091 1.594-2.606-2.709 1.412 2.238-2.08-2.99.63 2.717-1.4-3.049-.2 2.993-.615L2.125 6.78l3.048.216-2.5-1.755 2.876 1.03-1.934-2.365 2.492 1.768-1.225-2.8 1.923 2.375-.424-3.026 1.21 2.806L8 2l.408 3.028 1.21-2.806-.423 3.026 1.923-2.375-1.225 2.8 2.492-1.768-1.934 2.365 2.876-1.03-2.5 1.755 3.048-.216-2.882 1.016 2.993.614-3.049.201 2.717 1.4-2.99-.63 2.238 2.08-2.71-1.412 1.595 2.606-2.228-2.09.831 2.94-1.58-2.615.007 3.055z"
            mask="url(#mantine-otwe700ys)"
          />
          <g fillRule="nonzero">
            <path fill="#fff" d="M-.782 24.745l34.04-23.53v7.67z" mask="url(#mantine-otwe700ys)" />
            <path
              fill="#e2ae57"
              d="M-.782 24.745l34.04-29.53v7.67z"
              mask="url(#mantine-otwe700ys)"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
