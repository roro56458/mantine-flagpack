import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function NUFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-598732l1a" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-e24uy9zcz" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-vfa3qp57p" />
          </mask>
          <mask id="mantine-7scch2pcm" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v16H0z" />
          </mask>
          <path id="mantine-vfa3qp57p" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-598732l1a)">
          <use fill="#2e42a5" xlinkHref="#mantine-vfa3qp57p" />
          <path fill="#feca00" d="M0 16h32v8H0z" mask="url(#mantine-e24uy9zcz)" />
          <g mask="url(#mantine-e24uy9zcz)">
            <g mask="url(#mantine-7scch2pcm)">
              <g fillRule="nonzero">
                <path
                  fill="#fff"
                  d="M-2.262 15.13l6.343 1.467L17.6 9.126l1.431-.837 12.844-6.716 3.043-2.12-6.96-.642-11.222 6.33-8.109 3.985z"
                />
                <path fill="#f50100" d="M-1.705 16.019l3.415 1.12L33.649-.814h-4.795z" />
                <path
                  fill="#fff"
                  d="M34.37 14.73l.253 1.51-6.704.357-10.806-6.33-1.019.348L-4.08.411l8.33-1.604L15.384 4.96l8.712 4.21z"
                />
                <path
                  fill="#f50100"
                  d="M34.394 15.637l-3.415 1.12-13.6-7.686-4.032-.86L-3.26-.537h4.795l16.597 8.542 4.408 1.03z"
                />
              </g>
              <path
                stroke="#fff"
                strokeWidth="2.5"
                d="M17.628 0l-.001 6H32v4H17.627v8H14.44v-8H0V6h14.439V0z"
              />
              <path
                fill="#f50100"
                d="M17.692-1.333V6H34v4H17.692v9.333h-3.384L14.307 10H0V6h14.307v-7.333z"
              />
            </g>
          </g>
          <g mask="url(#mantine-e24uy9zcz)">
            <g transform="translate(4)">
              <circle cx="12.05" cy="7.85" r="2.75" fill="#2e42a5" />
              <path
                fill="#feca00"
                d="M12.1 8.691l-1.298.903.458-1.513L10 7.126l1.58-.032.52-1.494.52 1.494 1.58.032-1.26.955.458 1.513zm-9-.115l-1.082.753.382-1.261-1.05-.797 1.317-.026L3.1 6l.433 1.245 1.317.026-1.05.797.382 1.26zm18 0l-1.082.753.382-1.261-1.05-.797 1.317-.026L21.1 6l.433 1.245 1.317.026-1.05.797.382 1.26zm-9-4.8l-1.082.753.382-1.261-1.05-.797 1.317-.026L12.1 1.2l.433 1.245 1.317.026-1.05.797.382 1.26zm0 10.6l-1.082.753.382-1.261-1.05-.797 1.317-.026.433-1.245.433 1.245 1.317.026-1.05.797.382 1.26z"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
