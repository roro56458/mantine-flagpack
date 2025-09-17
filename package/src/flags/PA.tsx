import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function PAFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-85squpi14" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-egibrnflc" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-zk8q2e33k" />
          </mask>
          <path id="mantine-zk8q2e33k" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-85squpi14)">
          <use fill="#f7fcff" xlinkHref="#mantine-zk8q2e33k" />
          <path
            fill="#e31d1c"
            d="M16 0h16v12H16zm7.02 19.15l-2.302 1.424.894-2.391-1.957-1.811h2.374l.992-2.587.757 2.587h2.377l-1.713 1.81.839 2.392z"
            mask="url(#mantine-egibrnflc)"
          />
          <path
            fill="#2e42a5"
            d="M9.02 8.365L6.719 9.79l.894-2.392-1.957-1.81H8.03L9.021 3l.757 2.587h2.377l-1.713 1.81.839 2.393zM0 12h16v12H0z"
            mask="url(#mantine-egibrnflc)"
          />
        </g>
      </svg>
    </Box>
  );
}
