import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#e0931f',
  },
  dialogContentText: {
    marginBottom: theme.spacing(1)
  },
  gridContainer: {
    width: '100%',
    background: 'rgba(0,0,0,0)'
  },
  textField: {
    margin: theme.spacing(1)
  }
}));

const ModalCreateUser = ({openDialog, setOpenDialog, users, setUsers, setSelectUser}) => {

  const classes = useStyles();
  const [name, setName] = useState('')

  const handleCloseDialog = () => {
    if (/\s/.test(name)) {
      toast.error("Please, remove whitespaces.", {
        duration: 5000,
        style: {
          background: '#e57373',
          color: '#FFFFFF',
        },
        iconTheme: {
          primary: '#b71c1c',
          secondary: '#FFFFFF'
        },
      });
    } else {
      if (name === "") {
        toast.error("Invalid submit, input field is empty !", {
          duration: 5000,
          style: {
            background: '#e57373',
            color: '#FFFFFF',
          },
          iconTheme: {
            primary: '#b71c1c',
            secondary: '#FFFFFF'
          },
        });    
      } else {
        setOpenDialog(false);
        setUsers([name, ...users])
        setSelectUser(name)
        toast.success('New profil successfully created !', {
          duration: 5000,
          style: {
            background: '#ffd222',
            color: '#000000',
          },
          iconTheme: {
            primary: '#e0931f',
            secondary: '#000000'
          },
        })
      }
    }
  };

  const handleNameChange = (event) => {
    setName(event.currentTarget.value)
  }

  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" className={classes.title}>Create user</DialogTitle>
      <DialogContent style={{paddingBottom: '16px'}}>
        <DialogContentText className={classes.dialogContentText}>
          Write her name and submit form.
        </DialogContentText>
          <div>
            <TextField autoFocus id="standard-basic" label="Name" className={classes.textField} onChange={handleNameChange}/>
          </div>
      </DialogContent>  
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)} style={{color: '#e0931f'}}>
          Cancel
        </Button>
        <Button onClick={handleCloseDialog} style={{color: '#e0931f'}}>
          Submit
        </Button>   
      </DialogActions>
    </Dialog>
  );
}

export default ModalCreateUser;
