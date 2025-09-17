import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function KMFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-3ppvtax8x" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-e0u3vk2so" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-t3aj4h1fv" />
          </mask>
          <path id="mantine-t3aj4h1fv" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-3ppvtax8x)">
          <use fill="#5196ed" xlinkHref="#mantine-t3aj4h1fv" />
          <path fill="#af0100" d="M0 12h32v6H0z" mask="url(#mantine-e0u3vk2so)" />
          <path fill="#f7fcff" d="M0 6h32v6H0z" mask="url(#mantine-e0u3vk2so)" />
          <path fill="#feca00" d="M0 0h32v6H0z" mask="url(#mantine-e0u3vk2so)" />
          <path fill="#5eaa22" d="M0 0l19 12L0 24z" mask="url(#mantine-e0u3vk2so)" />
          <path
            fill="#f7fcff"
            d="M7.623 6.87s-3.648.75-3.775 4.58c-.127 3.827 3.457 5.05 3.457 5.05-1.363.35-5.824-.631-5.678-5.052.146-4.42 4.719-5.502 5.996-4.579zM8 14l.294.595.657.096-.475.464.112.654L8 15.5l-.588.309.112-.654-.475-.464.657-.096zm0-2l.294.595.657.096-.475.464.112.654L8 13.5l-.588.309.112-.654-.475-.464.657-.096zm0-2l.294.595.657.096-.475.464.112.654L8 11.5l-.588.309.112-.654-.475-.464.657-.096zm0-2l.294.595.657.096-.475.464.112.654L8 9.5l-.588.309.112-.654-.475-.464.657-.096z"
            mask="url(#mantine-e0u3vk2so)"
          />
        </g>
      </svg>
    </Box>
  );
}
