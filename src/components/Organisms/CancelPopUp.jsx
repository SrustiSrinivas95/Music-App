import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

export default function CancelPopUp() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Cancel
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Alert message!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you Sure you wanna cancel the Form Submission?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  component={Link} to="/addsong" onClick={handleClose} color="primary">
            No 
          </Button>
          <Button  component={Link} to="/" onClick={handleClose} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}