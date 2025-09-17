import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function PYFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-tylurj8hv" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-uh4cp57ew" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-1jkldkr31" />
          </mask>
          <path id="mantine-1jkldkr31" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-tylurj8hv)">
          <use fill="#f7fcff" xlinkHref="#mantine-1jkldkr31" />
          <g mask="url(#mantine-uh4cp57ew)">
            <g transform="translate(12 8)">
              <circle cx="4" cy="4" r="3.825" stroke="#272727" strokeWidth=".35" />
              <path
                fill="#272727"
                fillRule="nonzero"
                d="M4 6.65a2.65 2.65 0 100-5.3 2.65 2.65 0 000 5.3zM4 7a3 3 0 110-6 3 3 0 010 6z"
              />
            </g>
          </g>
          <path fill="#f05234" d="M0 0h32v8H0z" mask="url(#mantine-uh4cp57ew)" />
          <path fill="#3d58db" d="M0 16h32v8H0z" mask="url(#mantine-uh4cp57ew)" />
          <path
            fill="#73be4a"
            fillRule="nonzero"
            d="M15.206 10.09l.169.47c-.756.27-1.183.712-1.183 1.654 0 .933.431 1.512 1.334 1.788l-.146.478c-1.113-.34-1.747-1.003-1.747-2.157 0-1.145.61-1.888 1.573-2.233z"
            mask="url(#mantine-uh4cp57ew)"
            transform="rotate(-15 14.58 12.285)"
          />
          <path
            fill="#fbcd17"
            d="M16 12.315l-.882.599.297-1.024-.842-.654 1.066-.034L16 10.2l.361 1.002 1.066.034-.842.654.297 1.024z"
            mask="url(#mantine-uh4cp57ew)"
          />
          <path
            stroke="#73be4a"
            strokeWidth=".5"
            d="M17.212 10.182c-.86.308-1.29.983-1.29 2.027s.504 1.719 1.512 2.026"
            mask="url(#mantine-uh4cp57ew)"
            transform="scale(-1 1) rotate(-15 0 140.75)"
          />
          <path
            fill="#f7fcff"
            fillRule="nonzero"
            d="M14.564 9.044l.467.718"
            mask="url(#mantine-uh4cp57ew)"
          />
        </g>
      </svg>
    </Box>
  );
}
