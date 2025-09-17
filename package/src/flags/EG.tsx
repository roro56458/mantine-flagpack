import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function EGFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-hdhokt4rh" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-i7lsoenuh" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-7v2odvu6k" />
          </mask>
          <path id="mantine-7v2odvu6k" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-hdhokt4rh)">
          <use fill="#f7fcff" xlinkHref="#mantine-7v2odvu6k" />
          <path fill="#bf2714" d="M0 0h32v8H0z" mask="url(#mantine-i7lsoenuh)" />
          <path fill="#272727" d="M0 16h32v8H0z" mask="url(#mantine-i7lsoenuh)" />
          <g fill="#c09302" fillRule="nonzero" mask="url(#mantine-i7lsoenuh)">
            <path d="M12.26 10.22l1 .046-.251 5.47-1-.046zm1.044.34l.998.056-.25 4.436-.999-.057z" />
            <path d="M14.348 10.892l.997.082-.25 3.056-.997-.082zm5.392-.672l-1 .046.251 5.47 1-.046zm-1.044.34l-.998.056.25 4.436.999-.057z" />
            <path d="M17.652 10.892l-.997.082.25 3.056.997-.082zm-1.679 4.435L15 15.103l.412-1.8.975.223z" />
            <path d="M16.72 15.327l.974-.224-.412-1.8-.975.223z" />
            <path d="M16.472 15.31h-1v-1.768h1zm-1.837-4.397l1 .025-.059 2.38-1-.024zm1.739 0l1 .025-.059 2.38-1-.024z" />
            <path d="M13.338 15.923l.26-.966c1.06.286 1.875.427 2.431.427s1.37-.141 2.431-.427l.26.966c-1.138.306-2.031.46-2.691.46s-1.553-.154-2.691-.46zm-1.056-5.7c-.066-.66.32-1.108.976-1.051.215.019.457.082.78.192l.185.065c.443.157.563.198.588.203-.098-.022.191-.545.258-.633.008.056-.026.048-.106.032l-.902-.18.642-.66a1.17 1.17 0 01.865-.344c.035 0 .068-.002.177-.008l.17-.009c.624-.02 1.071.156 1.071.798 0 .23.03.599.077.879.016.094.047.182-.044.22.003-.032.222-.119.562-.26l.04-.018c.988-.412 1.103-.45 1.422-.257.212.13.414.36.64.707l-.837.547c-.146-.223-.262-.358-.317-.396.126.088-.298.228-.522.322l-.04.017c-.77.321-.87.36-1.09.36-.599 0-.813-.613-.872-1.49-.185.607-.735 1.374-1.19 1.374-.198 0-.102.031-.927-.262l-.172-.06a2.69 2.69 0 00-.544-.143.454.454 0 01.04-.04z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
