import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function JOFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-ekskl7w8q" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-xhre7p56z" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-43x2eokvu" />
          </mask>
          <mask id="mantine-yegusvaqp" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-2gzu8r3no" />
          </mask>
          <path id="mantine-43x2eokvu" d="M0 0h32v24H0z" />
          <path id="mantine-2gzu8r3no" d="M0 0v24l20-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ekskl7w8q)">
          <use fill="#f7fcff" xlinkHref="#mantine-43x2eokvu" />
          <path fill="#272727" d="M0 0h32v8H0z" mask="url(#mantine-xhre7p56z)" />
          <path fill="#093" d="M0 16h32v8H0z" mask="url(#mantine-xhre7p56z)" />
          <use fill="#e31d1c" xlinkHref="#mantine-2gzu8r3no" />
          <path
            fill="#f7fcff"
            d="M9.002 13.87L7.132 15l.426-2.204L6 11.146l2.11-.088L9.001 9l.892 2.058H12l-1.554 1.738.468 2.204z"
            mask="url(#mantine-yegusvaqp)"
          />
        </g>
      </svg>
    </Box>
  );
}
