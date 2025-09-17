import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function BVFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-2vbzgrslt" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-iosy6qb6q" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-7ptdcrh4s" />
          </mask>
          <path id="mantine-7ptdcrh4s" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-2vbzgrslt)">
          <use fill="#e31d1c" xlinkHref="#mantine-7ptdcrh4s" />
          <g fill="#2e42a5" stroke="#f7fcff" strokeWidth="2" mask="url(#mantine-iosy6qb6q)">
            <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
