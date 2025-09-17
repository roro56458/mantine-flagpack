import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function KPFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-cls4m1ifk" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ay4ddp7k2" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-hn6fc3vje" />
          </mask>
          <path id="mantine-hn6fc3vje" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-cls4m1ifk)">
          <use fill="#3d58db" xlinkHref="#mantine-hn6fc3vje" />
          <path
            fill="#c51918"
            stroke="#f7fcff"
            strokeWidth="2"
            d="M-1 5h34v14H-1z"
            mask="url(#mantine-ay4ddp7k2)"
          />
          <g mask="url(#mantine-ay4ddp7k2)">
            <g transform="translate(5 7)">
              <circle cx="5" cy="5" r="5" fill="#f7fcff" />
              <path
                fill="#c51918"
                d="M4.995 6.87L2.28 8.76l.958-3.167-2.637-2 3.309-.067L4.995.4l1.087 3.126 3.308.067-2.637 2 .958 3.167z"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
