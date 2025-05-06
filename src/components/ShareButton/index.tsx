'use client';

import { FC, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '../Button';

export const ShareButton: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const href = props.href + location?.href || '';
  return <Button {...props} href={href} />;
};
