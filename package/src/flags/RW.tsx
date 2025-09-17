import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function RWFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-go5yg0z4j" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-fksy7jgep" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-at26mtpol" />
          </mask>
          <path id="mantine-at26mtpol" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-go5yg0z4j)">
          <use fill="#feca00" xlinkHref="#mantine-at26mtpol" />
          <path fill="#3ca5d9" d="M0 0h32v14H0z" mask="url(#mantine-fksy7jgep)" />
          <path fill="#5a962a" d="M0 18h32v6H0z" mask="url(#mantine-fksy7jgep)" />
          <g fill="#ffdc17" mask="url(#mantine-fksy7jgep)">
            <path d="M23.99 2l.366 2.017a3.8 3.8 0 01.19.022l.828-1.879-.113 2.047c.06.02.12.042.18.065l1.243-1.64-.589 1.967c.054.034.108.068.16.104l1.594-1.313-1.031 1.782c.044.044.087.09.13.136l1.858-.915-1.42 1.499c.033.053.065.107.095.162l2.022-.467-1.731 1.135c.02.06.037.119.053.18l2.078.007-1.952.71c.009.103.013.208.013.314l-.004-.129 2.024.481-2.066.246c-.01.062-.02.122-.032.182l1.856.93-2.069-.231a3.886 3.886 0 01-.074.17l1.59 1.328-1.96-.699c-.036.05-.073.099-.11.146l1.238 1.66-1.747-1.129a3.77 3.77 0 01-.14.117l.819 1.898-1.436-1.497c-.054.03-.11.057-.166.083l.356 2.033-1.049-1.783a4.741 4.741 0 01-.18.042l-.128 2.059-.606-1.976-.098.003-.085-.001-.605 1.974-.128-2.056a3.997 3.997 0 01-.181-.042l-1.048 1.78.354-2.027a3.987 3.987 0 01-.169-.084l-1.43 1.492.815-1.89a3.992 3.992 0 01-.145-.12l-1.739 1.123 1.233-1.649c-.04-.05-.078-.1-.116-.152l-1.95.695 1.581-1.32a3.886 3.886 0 01-.078-.177l-2.055.23 1.844-.923a3.875 3.875 0 01-.035-.19l-2.05-.245 2.007-.478c.002-.065.006-.13.011-.194l-1.938-.704L20.14 6.9a4.02 4.02 0 01.056-.187l-1.72-1.127 2.01.464c.031-.057.064-.113.098-.168l-1.41-1.49 1.848.91c.044-.048.09-.095.135-.141L20.13 3.39l1.587 1.308c.054-.036.108-.072.164-.106l-.586-1.96 1.24 1.636c.061-.023.122-.045.184-.066l-.114-2.042.826 1.877c.064-.008.128-.015.193-.021zm-.044 3.417c-1.4 0-2.536 1.118-2.536 2.499s1.135 2.499 2.536 2.499c1.4 0 2.536-1.12 2.536-2.5s-1.135-2.498-2.536-2.498zm.03 1.143a1.43 1.43 0 110 2.858 1.43 1.43 0 010-2.858z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
