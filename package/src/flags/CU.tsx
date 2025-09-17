import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CUFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-ygz5v9p6m" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-jplhae2ba" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-oz75xzhmx" />
          </mask>
          <mask id="mantine-3hyplo4b2" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-7wuqudder" />
          </mask>
          <path id="mantine-oz75xzhmx" d="M0 0h32v24H0z" />
          <path id="mantine-7wuqudder" d="M0 0v24l18-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ygz5v9p6m)">
          <use fill="#3d58db" xlinkHref="#mantine-oz75xzhmx" />
          <path
            fill="#3d58db"
            stroke="#f7fcff"
            strokeWidth="4"
            d="M-2 8h36v8H-2z"
            mask="url(#mantine-jplhae2ba)"
          />
          <use fill="#e31d1c" xlinkHref="#mantine-7wuqudder" />
          <g fill="#f7fcff" mask="url(#mantine-3hyplo4b2)">
            <path d="M6.688 14.217l-3.672 1.938 1.788-3.894-2.278-2.08 2.812-.104 1.35-3.52 1.03 3.52h2.808l-1.872 2.184 1.489 3.894z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
