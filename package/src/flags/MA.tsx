import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MAFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-riirev5vh" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-riirev5vh)">
          <path fill="#c51918" d="M0 0h32v22a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
          <path fill="#e31d1c" d="M0 0h32v24H0z" />
          <g fill="#579d20" fillRule="nonzero">
            <path d="M16.166 2.7l6.316 16.926-6.355-3.805-6.332 3.805 6.097-16.925zm-.022 2.884l-.677 2.638-2.03 5.676-1.156 2.795 2.5-1.813 1.344-.808 1.366.818 2.56 1.803-1.186-2.739-2.019-5.656z" />
            <path d="M25.616 8.236l-6.195 5.237-3.263 2.324-3.495-2.324-6.278-5.237zm-4.035 1.783H10.357l2.378 1.455 3.408 2.415 3.397-2.577z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
