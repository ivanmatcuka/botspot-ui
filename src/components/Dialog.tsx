'use client';

import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
} from '@mui/material';
import { DialogContent as MuiDialogContent } from '@mui/material/';
import { FC, PropsWithChildren, ReactEventHandler } from 'react';

type DialogProps = {
  onClose: ReactEventHandler;
  open: boolean;
  title?: string;
};
export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  children,
  open,
  title,
}) => (
  <MuiDialog maxWidth="md" open={open} fullWidth>
    {title && (
      <>
        <MuiDialogTitle className="md:hidden" component="h2" variant="h3">
          {title}
        </MuiDialogTitle>
        <MuiDialogTitle className="hidden md:block" variant="h2">
          {title}
        </MuiDialogTitle>
      </>
    )}
    <MuiDialogContent>{children}</MuiDialogContent>
  </MuiDialog>
);
