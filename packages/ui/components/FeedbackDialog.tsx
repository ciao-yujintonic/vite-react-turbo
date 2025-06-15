import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

type DialogProps = {
  open: boolean;
  title: string;
  content: React.ReactElement;
  onAction: () => void;
  onClose: () => void;
};

export const FeedbackDialog = ({
  open,
  title,
  content,
  onAction,
  onClose,
}: DialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="feedback-dialog-title"
      aria-describedby="feedback-dialog-description"
    >
      <DialogTitle id="feedback-dialog-title">{title}</DialogTitle>
      <DialogContent id="feedback-dialog-description">{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onAction} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
