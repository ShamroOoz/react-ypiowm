import React,{Fragment} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DraggableDialog({showDialog,setshowDialog}) {

  return (
    <Fragment>
      <Dialog
        open={showDialog}
        onClose={() => setshowDialog(false)}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
           Duplicate
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are you sure you want to duplicate?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setshowDialog(false)}>
            Cancel
          </Button>
          <Button onClick={() => console.log(showDialog)}>Continue</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
