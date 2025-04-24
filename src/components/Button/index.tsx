'use client';

import {
  X,
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material';
import { FC } from 'react';
const MuiIcons = {
  X,
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
  ExpandLess,
  ExpandMore,
};

import { MenuItem } from '../Menu/Menu';

const PrimaryButton = styled(({ ...props }: ButtonProps) => (
  <MuiButton color="primary" {...props} variant="contained" />
))(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.primary.main,

    color: theme.palette.primary.main,
  },
}));

const SecondaryButton = styled(({ ...props }: ButtonProps) => (
  <MuiButton color="primary" {...props} variant="outlined" />
))(({ theme }) => ({
  backgroundColor: theme.palette.common.white,

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,

    color: theme.palette.common.white,
  },
}));

const OutlineButton = styled(SecondaryButton)(({ theme }) => ({
  borderColor: theme.palette.common.black,

  color: theme.palette.common.black,

  '&:hover': {
    backgroundColor: theme.palette.common.black,
    borderColor: theme.palette.common.black,

    color: theme.palette.common.white,
  },
}));

const MenuButton = styled(({ ...props }: ButtonProps) => (
  <MuiButton color="info" {...props} variant="text" />
))(({ theme }) => ({
  '&.active': {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.primary.main,
  },
}));

const TopicButton = styled(({ ...props }: ButtonProps) => (
  <MuiButton color="primary" {...props} variant="text" />
))(({ theme }) => ({
  padding: 0,
  ...theme.typography.h2,
}));

const MenuItemButton = styled(({ ...props }: ButtonProps) => (
  <MenuItem className={props.className}>
    <MuiButton color="info" {...props} variant="text" />
  </MenuItem>
))(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

type IconName = keyof typeof MuiIcons;
export type ButtonProps = {
  target?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'menu' | 'menuItem' | 'topic';
  startIconName?: IconName;
  endIconName?: IconName;
} & Pick<
  MuiButtonProps,
  | 'id'
  | 'onClick'
  | 'children'
  | 'disabled'
  | 'type'
  | 'component'
  | 'className'
  | 'href'
>;
export const Button: FC<ButtonProps> = ({
  variant,
  startIconName,
  endIconName,
  ...rest
}) => {
  const StartIconClass = startIconName ? MuiIcons[startIconName] : null;
  const EndIconClass = endIconName ? MuiIcons[endIconName] : null;

  const props = {
    ...rest,
    startIcon: StartIconClass ? <StartIconClass /> : undefined,
    endIcon: EndIconClass ? <EndIconClass /> : undefined,
  };

  switch (variant) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    case 'outline':
      return <OutlineButton {...props} />;
    case 'menu':
      return <MenuButton {...props} />;
    case 'menuItem':
      return <MenuItemButton {...props} />;
    case 'topic':
      return <TopicButton {...props} />;
    default:
      return <MuiButton {...props} />;
  }
};
