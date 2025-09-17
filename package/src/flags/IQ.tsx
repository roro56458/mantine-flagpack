import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function IQFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-8zwu4f4yo" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-z2cntlnrd" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-t1d5lq1ij" />
          </mask>
          <path id="mantine-t1d5lq1ij" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-8zwu4f4yo)">
          <use fill="#f7fcff" xlinkHref="#mantine-t1d5lq1ij" />
          <path fill="#bf2714" d="M0 0h32v8H0z" mask="url(#mantine-z2cntlnrd)" />
          <path fill="#272727" d="M0 16h32v8H0z" mask="url(#mantine-z2cntlnrd)" />
          <g fill="#009c4e" mask="url(#mantine-z2cntlnrd)">
            <path d="M12.779 9l.59.52-3.035 2.68h3.137c.119-.617.443-.925.973-.925.529 0 .856.308.98.925v1.926H6.507C6.229 14.709 5.727 15 5 15c.83-.589.943-1.319.337-2.189l.752-.576c.02.384.199.576.536.576s.772.073 1.305.217v-.793l.653-.291v1.084h6.03v-.793c.036-.143-.02-.215-.17-.215-.148 0-.232.072-.25.215v.372H9.408v-.631zm-5.287 5.466c.156 0 .283.111.283.25s-.127.25-.283.25-.283-.112-.283-.25.126-.25.283-.25zm17.562-5.252l.82.263v3.408h.637L27 14.103h-1.946zm-9.064 0l.82.263v3.408h.637l.489 1.218H15.99zm8.111.051l-.005 4.798h-4.33c0-1.173.414-1.788 1.243-1.845v-.402l.647-.416v1.482h.571v-2.135l.851-.49v2.625h.516V9.608zm-1.181.157c-.13.255-.466.328-1.005.22-.147.193-.443.193-.888 0z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
