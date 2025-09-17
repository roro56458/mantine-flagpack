import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CDFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-xxnbovwb8" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-xlzb70sq5" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-pps1259af" />
          </mask>
          <path id="mantine-pps1259af" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-xxnbovwb8)">
          <use fill="#3195f9" xlinkHref="#mantine-pps1259af" />
          <path
            fill="#e31d1c"
            fillRule="nonzero"
            stroke="#feca00"
            strokeWidth="2.5"
            d="M33.604-4.519L37.213.887-1.127 26.48l-3.61-5.406z"
            mask="url(#mantine-xlzb70sq5)"
          />
          <g fill="#feca00" mask="url(#mantine-xlzb70sq5)">
            <path d="M4.93 8.606l-3.485 2.418 1.114-4.141L0 4.238l3.465-.143L4.93 0l1.466 4.095h3.458L7.302 6.883l1.279 3.897z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
