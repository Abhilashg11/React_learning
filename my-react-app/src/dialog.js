import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const DialogComponent = ({ open, handleClose }) => {
    const title = 'message'
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>Hi everyone, how are you all doing</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
