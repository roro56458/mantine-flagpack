import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function LBFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-gg1q4qz8h" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-gg1q4qz8h)">
          <path fill="#f50101" d="M32 18v6H0v-6zm0-18v6H0V0z" />
          <path fill="#f7fcff" d="M0 6h32v12H0z" />
          <path
            fill="#52ab0b"
            d="M21.515 12.513c.074.868-3.126-.36-3.126-.012 0 .347 3.428.957 3.423 1.734s-4.066-.222-3.156.128c.91.35 2.866 1.186 2.643 1.708-.474 1.113-3.626-.773-3.888-.4-.423.599 2.326 1.998 2.303 2.131-.045.257-1.878-.402-2.303.13-.344-.097-.503-.56-.61-.622l-.676-8.723s.607 8.213-.169 8.45-2.931.954-2.994.595c-.023-.134 2.595-1.362 2.172-1.962-.311-.442-3.471 1.125-3.673.218-.898-.648 2.909-1.208 2.909-1.87 0-.662-3.483.784-3.066-.138.416-.922 3.205-1.252 3.257-1.38.095-.233-3.1.364-3.1 0 0-.687 1.912-.822 3.1-1.441.07-.706-2.88.695-3.1.129s3.771-2.033 3.673-2.147c-.154-.18-3.37.634-2.84.206 1.03-.83 3.039-1.958 3.501-2.26 0 0 .056-.113.115-.074l.126-.08s0 .71-.01.155 4.71 1.87 4.763 2.486c.062.718-2.916-.542-2.846.164.605.376 2.327 1.102 3.039 1.42.323.146-2.378-.306-2.32-.084.145.565 2.775.635 2.853 1.54z"
          />
        </g>
      </svg>
    </Box>
  );
}
