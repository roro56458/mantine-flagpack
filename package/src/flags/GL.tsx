import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GLFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-nsx9827zk" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-rxdqe4ooj" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-2b7w1cah1" />
          </mask>
          <mask id="mantine-5svnkvnou" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-km7s79e6d" />
          </mask>
          <path id="mantine-2b7w1cah1" d="M0 0h32v12H0z" />
          <path id="mantine-km7s79e6d" d="M0 0h32v12H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-nsx9827zk)">
          <g transform="translate(0 12)">
            <use fill="#c51918" xlinkHref="#mantine-2b7w1cah1" />
            <circle cx="12" r="8" fill="#f7fcff" mask="url(#mantine-rxdqe4ooj)" />
          </g>
          <use fill="#f7fcff" xlinkHref="#mantine-km7s79e6d" />
          <circle cx="12" cy="12" r="8" fill="#c51918" mask="url(#mantine-5svnkvnou)" />
        </g>
      </svg>
    </Box>
  );
}
